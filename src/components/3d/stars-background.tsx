"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Points as ThreePoints } from "three";

interface StarsProps {
  count?: number;
  radius?: number;
  color?: string;
  size?: number;
}

function Stars({ count = 5000, radius = 1.5, color = "#FAFAF9", size = 0.002 }: StarsProps) {
  const ref = useRef<ThreePoints>(null);
  const { pointer } = useThree();

  const [sphere] = useMemo(() => {
    const positions = random.inSphere(new Float32Array(count * 3), { radius }) as Float32Array;
    return [positions];
  }, [count, radius]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // React to mouse movement
      ref.current.rotation.x += pointer.x * 0.001;
      ref.current.rotation.y += pointer.y * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function StarsBackground() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        {/* Main white/gray stars */}
        <Stars count={4000} color="#FAFAF9" size={0.002} />
        {/* Accent green stars */}
        <Stars count={800} color="#C0FF70" size={0.003} />
      </Canvas>
    </div>
  );
}
