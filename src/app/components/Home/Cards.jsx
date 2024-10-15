'use client'; // Add this line to mark the component as a Client Component
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function CustomGLTFModel({ modelName, scale }) {
  const modelUrl = `/models/${modelName}`;
  const { scene } = useGLTF(modelUrl);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.008;
    }
  });

  return <primitive ref={ref} object={scene} scale={scale} position={[0, -2, 0]} />;
}

const Cards = ({ modelName, scale = 0.8 }) => {
  useGLTF.preload(`/models/${modelName}`);

  return (
    <div className="flex justify-center m-auto">
      <div className="flex flex-col items-center justify-center w-[260px] h-[442px] bg-[url('/images/bs-bg.png')] bg-cover bg-center  rounded-xl overflow-hidden">
      <div className="card-body items-center justify-center">
        <Canvas style={{ height: '100%', width: '100%' }}>
          <directionalLight position={[0, -1, 3]} />
          <CustomGLTFModel modelName={modelName} scale={scale} />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.8}
            enableRotate={true}
          />
        </Canvas>
      </div>
      <div className="card-info flex flex-col items-center text-white mt-auto p-4">
        <h3 className="item-name text-[18px] font-bold mb-2 text-center">
          Luxurious Elixir Rough
        </h3>
        <div className="flex space-x-4">
          <a className="text-[#AB572D] text-lg">$220</a>
          <a className="text-lg">100ml</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
