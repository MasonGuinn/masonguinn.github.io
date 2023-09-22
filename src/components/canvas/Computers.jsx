/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { extend } from '@react-three/fiber';
extend({ OrbitControls });

const Computers = () => {
	const computer = useGLTF('./desktop_pc/scene.gltf');
	return (
		<mesh>
			<directionalLight intensity={1} position={[-20, 50, 10]} />
			<ambientLight intensity={1} />
			<hemisphereLight intensity={1} groundColor='black' />
			<pointLight intensity={1} />
			<primitive
				position={[0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
				scale={0.75}
				object={computer.scene}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
