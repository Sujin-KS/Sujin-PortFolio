import {useEffect, useRef} from "react";
import * as React from "react";

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 mouse = (u_mouse / u_resolution.xy) * 2.0 - 1.0;
  mouse.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.2;

  vec2 p1 = p;
  p1.x += sin(t * 0.5) * 0.5;
  float aurora = fbm(p1 * 1.5 + vec2(t * 0.2, t * -0.1));
  aurora += fbm(p1 * 3.0 - vec2(t * 0.1, t * 0.3)) * 0.5;

  vec3 col1 = vec3(0.08, 0.02, 0.15);
  vec3 col2 = vec3(0.4,  0.1,  0.8);
  vec3 col3 = vec3(0.1,  0.4,  0.9);

  float mask = smoothstep(0.3, 0.8, aurora);
  vec3 color = mix(col1, col2, mask);
  color = mix(color, col3, smoothstep(0.5, 1.0, fbm(p * 2.0 - t)));

  float dist = length(p - mouse);
  float glow = smoothstep(0.8, 0.0, dist) * 0.15;
  color += col3 * glow;

  color *= 1.2 - length(p) * 0.5;

  gl_FragColor = vec4(color, 1.0);
}`;

function createShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
}

export default function AuroraBackground({children}: { children?: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({x: 0, y: 0});
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext | null;
        if (!gl) return;

        const syncSize = () => {
            const w = canvas.clientWidth || 1280;
            const h = canvas.clientHeight || 720;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
        };

        const ro = new ResizeObserver(syncSize);
        ro.observe(canvas);
        syncSize();

        const prog = gl.createProgram()!;
        gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
        gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const pos = gl.getAttribLocation(prog, "a_position");
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

        const uTime = gl.getUniformLocation(prog, "u_time");
        const uRes = gl.getUniformLocation(prog, "u_resolution");
        const uMouse = gl.getUniformLocation(prog, "u_mouse");

        mouseRef.current = {x: canvas.width / 2, y: canvas.height / 2};

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            if (rect.width && rect.height) {
                mouseRef.current = {
                    x: ((e.clientX - rect.left) / rect.width) * canvas.width,
                    y: (1 - (e.clientY - rect.top) / rect.height) * canvas.height,
                };
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        const render = (t: number) => {
            syncSize();
            gl.viewport(0, 0, canvas.width, canvas.height);
            if (uTime) gl.uniform1f(uTime, t * 0.001);
            if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
            if (uMouse) gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            rafRef.current = requestAnimationFrame(render);
        };

        rafRef.current = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            ro.disconnect();
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                background: "#000",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />

            {children && (
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        minHeight: "100vh",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}