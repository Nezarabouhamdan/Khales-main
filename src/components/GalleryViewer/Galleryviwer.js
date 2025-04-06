// GalleryViewer.jsx
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";
import { GreenText, Title } from "../Whoweare/TextContent";

const GOLDENRATIO = 1.61803398875;

// Reusable gallery component
const GalleryViewer = ({
  images,
  backgroundColor = "white",
  fogColor = "black",
}) => {
  // Detect mobile devices by checking width
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Adjust camera settings based on device
  const cameraFov = isMobile ? 70 : 45;
  const cameraPosition = isMobile ? [0, 2, 25] : [0, 2, 15];
  // Scale the scene group to "zoom out" on mobile so all cards are visible
  const groupScale = isMobile ? 0.6 : 1;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 1.5]}
        camera={{ fov: cameraFov, position: cameraPosition }}
      >
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[fogColor, 0, 15]} />
        <group position={[0, -0.5, 0]} scale={groupScale}>
          <Frames images={images} isMobile={isMobile} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={0.3}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.3}
            />
          </mesh>
        </group>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />{" "}
      </Canvas>
    </div>
  );
};

function Frames({ images, isMobile }) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  // Target camera position and rotation
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();

  // Update target camera position based on active card
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(
        p.set(0, GOLDENRATIO / 2, isMobile ? 3.25 : 1.75)
      );
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [params, isMobile]);

  // Animate camera movement
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  // Listen for arrow keys & Escape when a card is active
  useEffect(() => {
    if (params?.id) {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          const currentIndex = images.findIndex(
            (img) => getUuid(img.url) === params.id
          );
          let newIndex = currentIndex;
          if (e.key === "ArrowLeft") {
            newIndex = (currentIndex - 1 + images.length) % images.length;
          } else if (e.key === "ArrowRight") {
            newIndex = (currentIndex + 1) % images.length;
          }
          const newId = getUuid(images[newIndex].url);
          setLocation("/item/" + newId);
        } else if (e.key === "Escape") {
          setLocation("/");
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [params?.id, images, setLocation]);

  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
}

function Frame({ url, ...props }) {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;

  // Update useFrame hook for uniform scaling
  useFrame((state, dt) => {
    image.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.85 * (!isActive && hovered ? 0.85 : 1), // Uniform scale on X and Y
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "#66a109" : "white",
      0.1,
      dt
    );
  });
  useCursor(hovered);

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, 1, 0.05]} // Square scale
        position={[0, 0.5, 0]} // Centered position for square
      >
        <boxGeometry />
        <meshStandardMaterial
          color="grey"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.9, 0.9]} // Square inner frame
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 1]}
          url={url}
          width={1} // Set width and height for square
          height={1}
          fit="cover" // Ensure image covers square area
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, 1, 0]} // Adjusted to top of square frame
        fontSize={0.025}
      >
        {name.split("-").join(" ")}
      </Text>
    </group>
  );
}

export default GalleryViewer;
