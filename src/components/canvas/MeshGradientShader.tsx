"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { mousePosition } from "@/lib/mousePosition";
import { useBrandStore } from "@/store/useBrandStore";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform float uMetamorphosis;
uniform vec2 uMouse;
uniform float uBlogMode;
uniform float uCelebrate;

varying vec2 vUv;

vec3 brandGreen = vec3(0.655, 0.773, 0.106);
vec3 brandYellow = vec3(0.996, 0.918, 0.067);
vec3 brandOrange = vec3(0.996, 0.518, 0.008);
vec3 brandPink = vec3(1.0, 0.514, 0.6);
vec3 brandMagenta = vec3(0.996, 0.008, 0.482);
vec3 cream = vec3(0.976, 0.976, 0.965);
vec3 beige = vec3(0.961, 0.961, 0.863);

float blob(vec2 uv, vec2 center, float radius) {
  float d = length(uv - center);
  return smoothstep(radius, radius * 0.15, d);
}

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.15;
  float m = clamp(uMetamorphosis, 0.0, 1.0);

  if (uBlogMode > 0.5) {
    vec3 base = mix(cream, beige, uv.y * 0.3 + 0.1);
    gl_FragColor = vec4(base, 1.0);
    return;
  }

  // Yellow lives near the green side; pink stays on the opposite side so the
  // two never overlap into muddy orange.
  vec2 greenC = vec2(0.22 + sin(t) * 0.08, 0.38 + cos(t * 0.8) * 0.07);
  vec2 pinkC = vec2(0.82 + cos(t * 0.7) * 0.08, 0.3 + sin(t * 0.9) * 0.08);
  vec2 green2C = vec2(0.42 + sin(t * 1.05) * 0.08, 0.78 + cos(t * 0.55) * 0.07);
  vec2 pink2C = vec2(0.84 + cos(t * 0.85) * 0.07, 0.76 + sin(t * 0.65) * 0.07);
  vec2 yellowC = vec2(0.18 + cos(t * 0.95) * 0.07, 0.8 + sin(t * 0.75) * 0.06);
  vec2 mouseC = vec2(uMouse.x, 1.0 - uMouse.y);

  float gBlob = blob(uv, greenC, 0.42 * m + 0.05);
  float pBlob = blob(uv, pinkC, 0.42 * m + 0.05);
  float g2Blob = blob(uv, green2C, 0.34 * m + 0.04);
  float p2Blob = blob(uv, pink2C, 0.34 * m + 0.04);
  float yBlob = blob(uv, yellowC, 0.36 * m + 0.04);
  float mBlob = blob(uv, mouseC, 0.14 * m + 0.02);

  // Blend blobs over a white base so uncovered areas stay bright, never black.
  // Yellow goes first at low strength so green and pink read on top of it.
  vec3 vivid = cream;
  vivid = mix(vivid, brandYellow, yBlob * 0.45);
  vivid = mix(vivid, brandGreen, gBlob * 0.85);
  vivid = mix(vivid, brandGreen, g2Blob * 0.6);
  vivid = mix(vivid, brandPink, pBlob * 0.85);
  vivid = mix(vivid, brandPink, p2Blob * 0.55);
  vivid = mix(vivid, brandMagenta, mBlob * 0.12);

  vec3 sterile = mix(cream, beige, uv.x * 0.4 + uv.y * 0.3);
  vec3 color = mix(sterile, vivid, m);

  if (uCelebrate > 0.5) {
    vec3 celebration = mix(vivid, brandYellow, 0.2);
    color = mix(color, celebration, 0.88);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

export function MeshGradientShader() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMetamorphosis: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uBlogMode: { value: 0 },
      uCelebrate: { value: 0 },
    }),
    [],
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    const { metamorphosis, blogMode, contactCelebration } =
      useBrandStore.getState();
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMetamorphosis.value = metamorphosis;
    materialRef.current.uniforms.uMouse.value.set(
      mousePosition.x,
      mousePosition.y,
    );
    materialRef.current.uniforms.uBlogMode.value = blogMode ? 1 : 0;
    materialRef.current.uniforms.uCelebrate.value = contactCelebration ? 1 : 0;
  });

  return (
    <mesh scale={[2.2, 2.2, 1]}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
