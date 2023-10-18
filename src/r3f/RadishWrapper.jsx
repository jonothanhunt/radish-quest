import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model } from "../r3f/Radish";

export default function RadishWrapper() {
  const radishRef = useRef()
  const lightRef = useRef()

  useFrame(() => {
    radishRef.current.position.y = window.scrollY * 0.005
    radishRef.current.rotation.y = window.scrollY * 0.005
    radishRef.current.rotation.z = window.scrollY * 0.001

    lightRef.current.position.x = (window.scrollY * 0.02) - 2
    lightRef.current.position.z = Math.min((window.scrollY * 0.03) - 1, 1)
  })

  return (
    <>
      <ambientLight intensity={.2} color={'rgb(14, 17, 26)'} />
      <directionalLight ref={lightRef} position={[-2, 0, -1]} intensity={2}/>
      <group ref={radishRef}>
        <Model
          scale={[1.5,1.5,1.5]}
          position={[-.1,-.8,0]}
          rotation={[0,0,-.4]}
        />
      </group>
    </>

)}