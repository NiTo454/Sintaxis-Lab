"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count: number;
}

function Particles({ count }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15; // Distribución de -7.5 a 7.5
    }
    return pos;
  }, [count]);

  // Rotar el campo de partículas en cada frame
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#E61C8C" // Color fucsia de Sintaxis Lab
        sizeAttenuation={true}
        transparent={true}
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OrangeParticles({ count }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#FF5C33" // Color naranja de Sintaxis Lab
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reducir la densidad en pantallas pequeñas para optimizar GPU/batería
  const fucsiaCount = isMobile ? 200 : 600;
  const orangeCount = isMobile ? 100 : 300;

  return (
    <div className="absolute inset-0 -z-20 w-full h-full opacity-45 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        gl={{ powerPreference: "high-performance", antialias: !isMobile }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={fucsiaCount} />
        <OrangeParticles count={orangeCount} />
      </Canvas>
    </div>
  );
}
