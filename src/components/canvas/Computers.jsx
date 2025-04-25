import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import Three.js for animation handling
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf"); // Load new model
  const mixer = new THREE.AnimationMixer(scene); // Initialize animation mixer

  useEffect(() => {
    const clock = new THREE.Clock();

    // Play all animations from the GLTF file
    animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });

    // Function to update animation frames
    const animate = () => {
      mixer.update(clock.getDelta());
      requestAnimationFrame(animate);
    };
    animate();
  }, [animations]);

  return (
    <mesh>
      {/* Lighting setup */}
      <hemisphereLight intensity={0.3} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />

      {/* Render model with animation */}
      <primitive
        object={scene}
        scale={isMobile ? [0.8, 0.8, 0.8] : [1.8, 1.8, 1.8]} // Adjusted scale
        position={isMobile ? [0, -2, -2] : [0, -3.5, 0]} // Adjusted position
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 5, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
