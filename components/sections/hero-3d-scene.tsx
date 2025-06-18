"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import type { Mesh } from "three"
import { Environment, TorusKnot } from "@react-three/drei"

function SceneContent() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Basic rotation
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 7.5]} intensity={1.5} />

      <TorusKnot ref={meshRef} args={[1.2, 0.3, 128, 16]}>
        <meshStandardMaterial metalness={0.7} roughness={0.2} color="#00d4ff" />
      </TorusKnot>

      {/* Using a preset instead of a custom file for testing */}
      <Environment preset="night" background blur={0.5} />
      {/* <Environment files="/hdri/nebula.hdr" /> */}
    </>
  )
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-[-1] opacity-50 md:opacity-60">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
