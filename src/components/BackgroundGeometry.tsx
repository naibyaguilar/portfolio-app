import React, { useRef } from "react";
import { useFrame, Canvas } from "react-three-fiber";

type Props = {
  section: boolean;
};
export default function BackgroundGeometry({ section }: Props) {
  function Torus() {
    const material = section ? (
      <meshNormalMaterial attach="material" wireframe={true} />
    ) : (
      <meshToonMaterial attach="material" wireframe={true} />
    );

    const mesh = useRef(null);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      (mesh.current as any).rotation.y = t / 1;
    });
    return (
      <mesh ref={mesh}>
        <torusKnotGeometry attach="geometry" args={[10, 3, 100, 16]} />
        {material}
      </mesh>
    );
  }

  return (
    <Canvas>
      <Torus />
    </Canvas>
  );
}
