import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const Object = () => {
  return (
    <Canvas camera={{fov:5, position:[25,25,25]}}>
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <Stage environment="forest" intensity={0.6}>  
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
          </mesh>
        </Stage>
    </Canvas>
  )
}

export default Object