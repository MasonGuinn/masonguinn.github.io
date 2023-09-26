import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float
			speed={2.75}
			rotationIntensity={1}
			floatIntensity={4}>
			<ambientLight
				color={'white'}
				intensity={0.1}
			/>
			<directionalLight
				intensity={2}
				color={'white'}
				position={[0, 0, 0.5]}
			/>
			<mesh
				castShadow
				receiveShadow
				scale={2.5}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop='always'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enablePan={false}
					maxPolarAngle={Math.PI / 2}
					enableZoom={false}
					minPolarAngle={Math.PI / 2}
				/>
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
