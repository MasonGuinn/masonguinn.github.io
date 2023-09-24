/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'; // Import the THREE.js library
import React, { useState, useEffect } from 'react'; // Import necessary React components and hooks
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'; // Import components from react-three/fiber
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Import components from react-three/drei
import CanvasLoader from '../Loader'; // Import a custom component
import { extend } from '@react-three/fiber'; // Import extend function
extend({ OrbitControls }); // Extend the capabilities of the OrbitControls component

// Component for rendering the 3D model of a computer
const Computers = ({ isMobile }) => {
	// Load the 3D model of a computer using useGLTF hook
	const computer = useGLTF('./desktop_pc/scene.gltf');

	// Return a mesh containing various lights and the 3D computer model
	return (
		<mesh>
			<directionalLight
				intensity={1}
				position={[-20, 50, 10]}
			/>
			<ambientLight intensity={1} />
			<hemisphereLight
				intensity={1}
				groundColor='black'
			/>
			<pointLight intensity={1} />
			<primitive
				position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]} // Set the position based on whether it's mobile or not
				rotation={[-0.01, -0.2, -0.1]} // Set the rotation
				scale={isMobile ? 0.6 : 0.75} // Set the scale based on whether it's mobile or not
				object={computer.scene} // Set the 3D model to be rendered
			/>
		</mesh>
	);
};

// Main component for rendering the 3D canvas
const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false); // Initialize a state variable for mobile detection

	// Use the useEffect hook to add a listener for changes to the screen size
	useEffect(() => {
		// Create a media query to detect mobile view (max-width: 638px)
		const mediaQuery = window.matchMedia('(max-width: 638px)');
		setIsMobile(mediaQuery.matches); // Set the initial state based on the media query result

		// Define a callback function to handle changes in the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches); // Update the state when the media query changes
		};

		// Add the callback function as a event listener for changes to the media query
		mediaQuery.addEventListener('change', handleMediaQueryChange);

		// Clean up the event listener when the component unmounts
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []); // The empty dependency array ensures this effect runs once, similar to componentDidMount

	// Return a Canvas component to render the 3D scene
	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 35 }}
			gl={{ preserveDrawingBuffer: true }}>
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

export default ComputersCanvas; // Export the main component
