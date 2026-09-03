import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

/**
 * DAOVOS Dither Field
 * Shader concept adapted from React Bits' Dither component:
 * https://github.com/DavidHDev/react-bits/tree/main/src/content/Backgrounds/Dither
 * Copyright (c) 2026 David Haz — MIT + Commons Clause.
 *
 * This is a plain-OGL port for the DAOVOS stack. Rendering time and pointer
 * interpolation are driven by GSAP's ticker/quickTo so motion has one clock.
 */

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;
uniform float uPixelSize;
uniform float uLevels;
uniform float uContrast;
uniform float uRotation;
uniform float uWarp;
uniform float uTone;
uniform float uPattern;
uniform float uSeed;
uniform vec2 uMouse;
uniform float uMouseStrength;

varying vec2 vUv;

vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float cnoise(vec2 p) {
  vec4 pi = floor(p.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 pf = fract(p.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  pi = mod289(pi);
  vec4 ix = pi.xzxz;
  vec4 iy = pi.yyww;
  vec4 fx = pf.xzxz;
  vec4 fy = pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx -= tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fadeXY = fade(pf.xy);
  vec2 nx = mix(vec2(n00, n01), vec2(n10, n11), fadeXY.x);
  return 2.3 * mix(nx.x, nx.y, fadeXY.y);
}

mat2 rotate2d(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float reliefField(vec2 p) {
  float t = uTime;
  vec2 q = rotate2d(uRotation) * p;
  vec2 drift = vec2(t * 0.08 + uSeed, -t * 0.055 - uSeed * 0.37);
  float a = abs(cnoise(q * uFrequency + drift));
  float b = abs(cnoise((q + a * uWarp) * (uFrequency * 1.73) - drift * 0.7));
  float c = abs(cnoise((q - b * 0.55) * (uFrequency * 0.61) + drift * 0.38));
  return clamp(a * 0.52 + b * 0.31 + c * uAmplitude, 0.0, 1.0);
}

float signalField(vec2 p) {
  vec2 q = rotate2d(uRotation) * p;
  float drift = uTime * 0.42;
  float warp = cnoise(q * 2.1 + vec2(uSeed, -uSeed)) * uWarp;
  float horizontal = sin((q.y + warp * 0.12) * (18.0 + uFrequency * 4.0) - drift);
  float carrier = sin(q.x * (5.0 + uFrequency) + drift * 0.38 + uSeed * 3.0);
  return clamp(0.5 + horizontal * 0.34 + carrier * 0.16, 0.0, 1.0);
}

vec2 hash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p + uSeed * 8.17) * 43758.5453);
}

float cellField(vec2 p) {
  vec2 q = rotate2d(uRotation) * p * (3.2 + uFrequency * 0.46);
  vec2 cell = floor(q);
  vec2 local = fract(q);
  float nearest = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = hash22(cell + neighbor);
      point = 0.5 + 0.34 * sin(uTime * 0.26 + 6.28318 * point);
      vec2 delta = neighbor + point - local;
      nearest = min(nearest, dot(delta, delta));
    }
  }
  float rings = 0.5 + 0.5 * cos(sqrt(nearest) * (22.0 + uWarp * 5.0));
  return clamp(rings * 0.82 + sqrt(nearest) * 0.3, 0.0, 1.0);
}

float radialField(vec2 p) {
  vec2 q = rotate2d(uRotation) * p;
  float radius = length(q);
  float angle = atan(q.y, q.x);
  float turbulence = cnoise(q * (2.4 + uFrequency * 0.18) + uSeed);
  float rings = sin(radius * (30.0 + uFrequency * 2.2) - uTime * 0.46 + turbulence * uWarp * 2.0);
  float spokes = sin(angle * 8.0 + radius * 6.0 + uSeed * 4.0);
  return clamp(0.5 + rings * 0.34 + spokes * 0.14, 0.0, 1.0);
}

float weaveField(vec2 p) {
  vec2 q = rotate2d(uRotation) * p;
  float bend = cnoise(q * 1.7 + vec2(-uSeed, uSeed)) * uWarp;
  float warpA = sin((q.x + bend * 0.11) * (17.0 + uFrequency * 2.0) + uTime * 0.34);
  float warpB = sin((q.y - bend * 0.13) * (23.0 + uFrequency * 1.4) - uTime * 0.27);
  float stitched = max(abs(warpA), abs(warpB));
  return clamp(1.0 - stitched * 0.72 + bend * 0.18, 0.0, 1.0);
}

float patternField(vec2 p) {
  if (uPattern < 0.5) return reliefField(p);
  if (uPattern < 1.5) return signalField(p);
  if (uPattern < 2.5) return cellField(p);
  if (uPattern < 3.5) return radialField(p);
  return weaveField(p);
}

float orderedNoise(vec2 position) {
  vec2 cell = floor(position / max(uPixelSize, 1.0));
  return fract(52.9829189 * fract(dot(cell, vec2(0.06711056, 0.00583715))));
}

void main() {
  vec2 uv = vUv - 0.5;
  uv.x *= uResolution.x / max(uResolution.y, 1.0);

  vec2 mouse = uMouse - 0.5;
  mouse.x *= uResolution.x / max(uResolution.y, 1.0);
  float influence = exp(-dot(uv - mouse, uv - mouse) * 4.5) * uMouseStrength;

  float value = patternField(uv + influence * vec2(0.12, -0.08));
  value = (value - 0.5) * uContrast + 0.5 + influence * 0.2;
  float levels = max(2.0, uLevels);
  float threshold = orderedNoise(gl_FragCoord.xy) - 0.5;
  value = floor(clamp(value + threshold / levels, 0.0, 1.0) * levels) / levels;

  vec3 nearBlack = vec3(0.0392, 0.0392, 0.0471);
  vec3 graphite = vec3(0.3529, 0.3490, 0.3451);
  vec3 bone = vec3(0.9294, 0.9020, 0.8745);
  vec3 darkField = mix(nearBlack, mix(graphite, bone, value), value);
  vec3 lightField = mix(bone, mix(graphite, nearBlack, value), value);
  vec3 color = mix(darkField, lightField, uTone);
  gl_FragColor = vec4(color, 1.0);
}
`;

const defaults = {
  speed: 1,
  frequency: 2.8,
  amplitude: 0.38,
  pixelSize: 4,
  levels: 4,
  contrast: 1.28,
  rotation: -0.18,
  warp: 0.72,
  tone: 0,
  pattern: 0,
  seed: 0.37,
  mouseX: 0.5,
  mouseY: 0.5,
  mouseStrength: 0
};

export const createDitherModel = (overrides = {}) => ({ ...defaults, ...overrides });

export const DaovosDitherField = ({ model, className = '' }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !model) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new Renderer({
      alpha: false,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5)
    });
    const gl = renderer.gl;
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uResolution: { value: [1, 1] },
        uTime: { value: 0 },
        uFrequency: { value: model.frequency },
        uAmplitude: { value: model.amplitude },
        uPixelSize: { value: model.pixelSize },
        uLevels: { value: model.levels },
        uContrast: { value: model.contrast },
        uRotation: { value: model.rotation },
        uWarp: { value: model.warp },
        uTone: { value: model.tone },
        uPattern: { value: model.pattern },
        uSeed: { value: model.seed },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseStrength: { value: 0 }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });
    gl.canvas.setAttribute('aria-hidden', 'true');
    root.appendChild(gl.canvas);

    const resize = () => {
      const width = Math.max(1, root.clientWidth);
      const height = Math.max(1, root.clientHeight);
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);
    resize();

    let inView = false;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    }, { rootMargin: '20% 0px' });
    intersectionObserver.observe(root);

    const mouseXTo = gsap.quickTo(model, 'mouseX', { duration: 0.42, ease: 'power3.out' });
    const mouseYTo = gsap.quickTo(model, 'mouseY', { duration: 0.42, ease: 'power3.out' });
    const mouseStrengthTo = gsap.quickTo(model, 'mouseStrength', { duration: 0.5, ease: 'power3.out' });

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      mouseXTo((event.clientX - rect.left) / Math.max(rect.width, 1));
      mouseYTo(1 - ((event.clientY - rect.top) / Math.max(rect.height, 1)));
      mouseStrengthTo(0.8);
    };
    const handlePointerLeave = () => {
      mouseXTo(0.5);
      mouseYTo(0.5);
      mouseStrengthTo(0);
    };
    if (!reduceMotion) {
      root.addEventListener('pointermove', handlePointerMove);
      root.addEventListener('pointerleave', handlePointerLeave);
    }

    let elapsed = 0;
    const render = (_time, deltaTime) => {
      if (!inView && !reduceMotion) return;
      if (!reduceMotion) elapsed += Math.min(deltaTime, 40) * 0.001 * model.speed;
      const uniforms = program.uniforms;
      uniforms.uTime.value = elapsed;
      uniforms.uFrequency.value = model.frequency;
      uniforms.uAmplitude.value = model.amplitude;
      uniforms.uPixelSize.value = model.pixelSize;
      uniforms.uLevels.value = model.levels;
      uniforms.uContrast.value = model.contrast;
      uniforms.uRotation.value = model.rotation;
      uniforms.uWarp.value = model.warp;
      uniforms.uTone.value = model.tone;
      uniforms.uPattern.value = model.pattern;
      uniforms.uSeed.value = model.seed;
      uniforms.uMouse.value[0] = model.mouseX;
      uniforms.uMouse.value[1] = model.mouseY;
      uniforms.uMouseStrength.value = model.mouseStrength;
      renderer.render({ scene: mesh });
    };
    if (reduceMotion) {
      render(0, 0);
    } else {
      gsap.ticker.add(render);
    }

    return () => {
      if (!reduceMotion) gsap.ticker.remove(render);
      mouseXTo.tween?.kill();
      mouseYTo.tween?.kill();
      mouseStrengthTo.tween?.kill();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (!reduceMotion) {
        root.removeEventListener('pointermove', handlePointerMove);
        root.removeEventListener('pointerleave', handlePointerLeave);
      }
      if (gl.canvas.parentNode === root) root.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [model]);

  return <div className={`daovos-dither-field ${className}`} ref={rootRef} aria-hidden="true" />;
};

export default DaovosDitherField;
