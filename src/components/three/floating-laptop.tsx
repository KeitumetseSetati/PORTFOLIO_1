
"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

type LaptopKey = {
  label: string;
  units?: number;
};

const KEY_ROWS: LaptopKey[][] = [
  [
    ..."1234567890".split("").map((label) => ({ label })),
    { label: "-", units: 1 },
    { label: "=", units: 1 },
    { label: "delete", units: 1.65 },
  ],
  [
    { label: "tab", units: 1.45 },
    ..."QWERTYUIOP".split("").map((label) => ({ label })),
    { label: "[", units: 1 },
    { label: "]", units: 1 },
    { label: "\\", units: 1.2 },
  ],
  [
    { label: "caps", units: 1.8 },
    ..."ASDFGHJKL".split("").map((label) => ({ label })),
    { label: ";", units: 1 },
    { label: "'", units: 1 },
    { label: "return", units: 1.8 },
  ],
  [
    { label: "shift", units: 2.2 },
    ..."ZXCVBNM".split("").map((label) => ({ label })),
    { label: ",", units: 1 },
    { label: ".", units: 1 },
    { label: "/", units: 1 },
    { label: "shift", units: 2.2 },
  ],
  [
    { label: "fn", units: 1 },
    { label: "ctrl", units: 1 },
    { label: "alt", units: 1 },
    { label: "cmd", units: 1.25 },
    { label: "", units: 5.4 },
    { label: "cmd", units: 1.25 },
    { label: "alt", units: 1 },
    { label: "ctrl", units: 1 },
  ],
];

function Key({
  label,
  width,
  x,
  z,
}: {
  label: string;
  width: number;
  x: number;
  z: number;
}) {
  return (
    <group position={[x, -0.965, z]}>
      <RoundedBox
        args={[width, 0.035, 0.135]}
        radius={0.012}
        smoothness={3}
      >
        <meshStandardMaterial
          color="#111318"
          metalness={0.3}
          roughness={0.6}
        />
      </RoundedBox>

      {label && (
        <Text
          position={[0, 0.019, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={label.length > 3 ? 0.033 : 0.052}
          color="#d5d9e2"
          anchorX="center"
          anchorY="middle"
          maxWidth={width - 0.025}
        >
          {label}
        </Text>
      )}
    </group>
  );
}

function Keyboard() {
  const rows = useMemo(() => {
    return KEY_ROWS.map((row, rowIndex) => {
      const gap = 0.018;
      const availableWidth = 3.31;
      const totalUnits = row.reduce(
        (sum, key) => sum + (key.units ?? 1),
        0
      );

      const unitWidth =
        (availableWidth - gap * (row.length - 1)) /
        totalUnits;

      let cursor = -availableWidth / 2;

      return row.map((key, keyIndex) => {
        const width = (key.units ?? 1) * unitWidth;
        const x = cursor + width / 2;

        cursor += width + gap;

        return {
          id: `${rowIndex}-${keyIndex}`,
          label: key.label,
          width,
          x,
          z: -0.32 + rowIndex * 0.185,
        };
      });
    }).flat();
  }, []);

  return (
    <group>
      {/* Recessed keyboard surround */}
      <RoundedBox
        args={[3.49, 0.009, 1.13]}
        radius={0.045}
        smoothness={3}
        position={[0, -0.988, 0.055]}
      >
        <meshStandardMaterial
          color="#30343e"
          metalness={0.65}
          roughness={0.48}
        />
      </RoundedBox>

      {rows.map((key) => (
        <Key
          key={key.id}
          label={key.label}
          width={key.width}
          x={key.x}
          z={key.z}
        />
      ))}
    </group>
  );
}

function BlueWallpaper() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;

            vec3 background = vec3(0.012, 0.025, 0.065);

            float upperCurve =
              length((uv - vec2(0.25, 1.05)) *
              vec2(0.85, 1.2));

            float lowerCurve =
              length((uv - vec2(0.92, -0.30)) *
              vec2(0.85, 0.95));

            float upperGlow =
              exp(-pow((upperCurve - 0.72) * 24.0, 2.0));

            float lowerGlow =
              exp(-pow((lowerCurve - 0.85) * 20.0, 2.0));

            float upperSurface =
              smoothstep(0.74, 0.68, upperCurve);

            float lowerSurface =
              smoothstep(0.87, 0.80, lowerCurve);

            vec3 color = background;

            color = mix(
              color,
              vec3(0.025, 0.09, 0.25),
              upperSurface * 0.85
            );

            color = mix(
              color,
              vec3(0.015, 0.07, 0.19),
              lowerSurface * 0.95
            );

            color +=
              vec3(0.10, 0.37, 0.98) *
              upperGlow * 0.95;

            color +=
              vec3(0.07, 0.28, 0.85) *
              lowerGlow * 0.85;

            float highlight =
              exp(-pow((upperCurve - 0.72) * 65.0, 2.0));

            color +=
              vec3(0.28, 0.55, 1.0) *
              highlight * 0.55;

            gl_FragColor = vec4(color, 1.0);
          }
        `,
      }),
    []
  );

  return (
    <mesh position={[0, 0, 0.087]}>
      <planeGeometry args={[3.52, 2.15]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

export function FloatingLaptop() {
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!laptopRef.current) return;

    const time = state.clock.elapsedTime;

    const targetX = 0.08 - state.pointer.y * 0.12;
    const targetY = -0.18 + state.pointer.x * 0.22;

    laptopRef.current.rotation.x = THREE.MathUtils.damp(
      laptopRef.current.rotation.x,
      targetX,
      3,
      delta
    );

    laptopRef.current.rotation.y = THREE.MathUtils.damp(
      laptopRef.current.rotation.y,
      targetY,
      3,
      delta
    );

    laptopRef.current.position.y =
      Math.sin(time * 0.8) * 0.08;
  });

  return (
    <group ref={laptopRef} rotation={[0.08, -0.18, 0]}>
      {/* GRAPHITE BASE */}
      <RoundedBox
        args={[3.9, 0.12, 2.48]}
        radius={0.085}
        smoothness={5}
        position={[0, -1.075, 0.55]}
      >
        <meshStandardMaterial
          color="#525762"
          metalness={0.82}
          roughness={0.32}
        />
      </RoundedBox>

      {/* TOP ALUMINIUM DECK */}
      <RoundedBox
        args={[3.78, 0.025, 2.34]}
        radius={0.055}
        smoothness={4}
        position={[0, -1.002, 0.55]}
      >
        <meshStandardMaterial
          color="#686d78"
          metalness={0.82}
          roughness={0.37}
        />
      </RoundedBox>

      {/* REALISTIC KEYBOARD */}
      <Keyboard />

      {/* TRACKPAD OUTLINE */}
      <RoundedBox
        args={[1.43, 0.009, 0.62]}
        radius={0.045}
        smoothness={4}
        position={[0, -0.981, 1.285]}
      >
        <meshStandardMaterial
          color="#424752"
          metalness={0.65}
          roughness={0.45}
        />
      </RoundedBox>

      {/* TRACKPAD SURFACE */}
      <RoundedBox
        args={[1.40, 0.01, 0.59]}
        radius={0.042}
        smoothness={4}
        position={[0, -0.975, 1.285]}
      >
        <meshStandardMaterial
          color="#777b86"
          metalness={0.72}
          roughness={0.38}
        />
      </RoundedBox>

      {/* FRONT EDGE DETAIL */}
      <mesh position={[0, -1.075, 1.785]}>
        <boxGeometry args={[3.65, 0.008, 0.009]} />
        <meshStandardMaterial
          color="#a8adb8"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* SCREEN HINGE */}
      <mesh
        position={[0, -0.91, -0.61]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.042, 0.042, 3.5, 24]} />
        <meshStandardMaterial
          color="#242830"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* THIN SCREEN ASSEMBLY */}
      <group
        position={[0, 0.18, -0.63]}
        rotation={[-0.11, 0, 0]}
      >
        {/* METALLIC SCREEN SHELL */}
        <RoundedBox
          args={[3.78, 2.47, 0.085]}
          radius={0.075}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#484d58"
            metalness={0.86}
            roughness={0.3}
          />
        </RoundedBox>

        {/* BLACK DISPLAY FRAME */}
        <RoundedBox
          args={[3.68, 2.37, 0.013]}
          radius={0.045}
          smoothness={4}
          position={[0, 0, 0.052]}
        >
          <meshStandardMaterial
            color="#05070c"
            roughness={0.28}
          />
        </RoundedBox>

        {/* BLUE WAVE DISPLAY */}
        <BlueWallpaper />

        {/* CAMERA NOTCH */}
        <RoundedBox
          args={[0.38, 0.075, 0.009]}
          radius={0.024}
          smoothness={3}
          position={[0, 1.135, 0.072]}
        >
          <meshBasicMaterial color="#05070c" />
        </RoundedBox>

        {/* CAMERA */}
        <mesh position={[0, 1.135, 0.081]}>
          <circleGeometry args={[0.015, 16]} />
          <meshBasicMaterial color="#283a57" />
        </mesh>
      </group>
    </group>
  );
}

export default FloatingLaptop;
