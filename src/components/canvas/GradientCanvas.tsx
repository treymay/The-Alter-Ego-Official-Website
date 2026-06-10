"use client";

import { Canvas } from "@react-three/fiber";
import { MeshGradientShader } from "./MeshGradientShader";

export function GradientCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      frameloop="always"
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <MeshGradientShader />
    </Canvas>
  );
}
