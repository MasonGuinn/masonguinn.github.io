import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { github } from '../assets/';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants/';
import { fadeIn, textVariant } from '../utils/motion.js';
import { artProjects } from '../constants';

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What I've been doing with my time
				</p>
				<h2 className={`${styles.sectionHeadText} pb-8 text-center`}>
					Projects
				</h2>
				<div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{artProjects.map((project, index) => (
						<ArtCard
							key={`art-project-${index}`}
							index={index}
							name={project.name}
							description={project.description}
							image={project.image}
						/>
					))}
				</div>
			</motion.div>
		</>
	);
};

const ArtCard = ({ index, name, description, image }) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className='w-full red-white-gradient p-[1px] rounded-[20px] shadow-card'>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden'>
				<img
					src={image}
					alt={name}
					className='w-full h-auto object-contain transition-transform transform hover:scale-110'
				/>
				<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex justify-center items-center flex-col'>
					<h3 className='text-white text-[20px] font-bold text-center'>
						{name}
					</h3>
					<p className='text-white text-[14px] text-center'>{description}</p>
				</div>
			</div>
		</motion.div>
	</Tilt>
);

export default SectionWrapper(Works, 'projects');
