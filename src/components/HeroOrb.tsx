import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

const OrbCore = () => {
  const coreRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.35;
    coreRef.current.rotation.x += delta * 0.18;
  });

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[1, 96, 96]} />
      <meshStandardMaterial
        color="#4f9cff"
        emissive="#3b82f6"
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.15}
      />
    </mesh>
  );
};

const OrbRings = () => {
  const ringARef = useRef<Mesh>(null);
  const ringBRef = useRef<Mesh>(null);
  const ringCRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ringARef.current) ringARef.current.rotation.z += delta * 0.35;
    if (ringBRef.current) ringBRef.current.rotation.y -= delta * 0.28;
    if (ringCRef.current) ringCRef.current.rotation.x += delta * 0.24;
  });

  return (
    <>
      <mesh ref={ringARef} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[1.55, 0.03, 24, 160]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.34} />
      </mesh>
      <mesh ref={ringBRef} rotation={[0, Math.PI / 3.2, Math.PI / 8]}>
        <torusGeometry args={[1.85, 0.025, 24, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.25} />
      </mesh>
      <mesh ref={ringCRef} rotation={[Math.PI / 4.2, Math.PI / 5, 0]}>
        <torusGeometry args={[2.1, 0.022, 24, 160]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
      </mesh>
    </>
  );
};

const HeroOrb = () => (
  <div className="hero-orb-shell">
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.45} />
      <pointLight position={[2.8, 2.2, 2.6]} intensity={2.2} color="#60a5fa" />
      <pointLight position={[-2.4, -2, -2.2]} intensity={1.3} color="#a78bfa" />
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.7}>
        <group>
          <OrbCore />
          <OrbRings />
        </group>
      </Float>
    </Canvas>
  </div>
);

export default HeroOrb;
