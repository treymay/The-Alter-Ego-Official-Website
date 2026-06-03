"use client";

import { Float, MeshDistortMaterial, Torus } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

function LotusWireframe() {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group rotation={[0.4, 0.6, 0]}>
        <Torus args={[0.9, 0.02, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#FE027B" wireframe />
        </Torus>
        <Torus args={[0.55, 0.015, 12, 48]} rotation={[Math.PI / 2.2, 0.3, 0]}>
          <meshBasicMaterial color="#A7C51B" wireframe />
        </Torus>
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.35, 24, 24]} />
          <MeshDistortMaterial
            color="#FF8299"
            wireframe
            distort={0.25}
            speed={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function LotusCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} color="#FEEA11" intensity={1.2} />
      <pointLight position={[-2, -1, 1]} color="#FE027B" intensity={0.8} />
      <LotusWireframe />
    </Canvas>
  );
}

export const LotusScene = dynamic(() => Promise.resolve(LotusCanvas), {
  ssr: false,
});
