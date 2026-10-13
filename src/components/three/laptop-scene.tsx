"use client";

import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { FloatingLaptop } from "./floating-laptop";
import * as THREE from "three";

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const aspectRatio = size.width / size.height;

    // Move the camera farther away on narrower screens.
    const distance =
      aspectRatio < 0.75
        ? 12.5
        : aspectRatio < 1.1
          ? 10
          : aspectRatio < 1.5
            ? 8.8
            : 7.5;

    const perspectiveCamera =
      camera as THREE.PerspectiveCamera;

    perspectiveCamera.position.set(
      distance * 0.56,
      distance * 0.39,
      distance
    );

    // Aim slightly below the laptop screen centre.
    perspectiveCamera.lookAt(0, -0.35, 0);

    perspectiveCamera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);

  return null;
}

export default function LaptopScene() {
  return (
    <div className="relative h-[300px] w-full sm:h-[380px] md:h-[440px] lg:h-[510px]">
      <Canvas
        camera={{
          position: [4.2, 2.9, 7.5],
          fov: 42,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        fallback={
          <div className="flex h-full items-center justify-center text-[var(--muted)]">
            3D preview unavailable
          </div>
        }
      >
        <ResponsiveCamera />

        <ambientLight intensity={2.2} />

        <hemisphereLight
          args={["#ffffff", "#526b5b", 2]}
        />

        <directionalLight
          position={[4, 7, 6]}
          intensity={3}
          color="#ffffff"
        />

        <directionalLight
          position={[-4, 3, -2]}
          intensity={2}
          color="#9ccab0"
        />

        <pointLight
          position={[-3, 1, 4]}
          intensity={24}
          distance={12}
          color="#00ff85"
        />

        <pointLight
          position={[3, -2, 3]}
          intensity={14}
          distance={10}
          color="#00e5ff"
        />

        <Suspense fallback={null}>
          <FloatingLaptop />
        </Suspense>
      </Canvas>
    </div>
  );
}