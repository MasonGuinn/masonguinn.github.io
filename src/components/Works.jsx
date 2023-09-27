import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { github } from '../assets/';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants/';
import { fadeIn, textVariant } from '../utils/motion.js';

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What I've been doing with my time
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Works, 'projects');
