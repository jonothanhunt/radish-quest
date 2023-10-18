import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three';

export function Model(props) {
  const { nodes, materials } = useGLTF("./3D/radish.glb");
  const texture = useTexture("./3D/texture.jpg")
  texture.flipY = false
  
  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.radish.geometry}
      > 
        <meshStandardMaterial
            map={texture}
            side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./3D/radish.glb");