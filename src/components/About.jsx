import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	const about_text = `I'm a skilled software developer with experience in TypeScript and
				JavaScript, and expertise in frameworks like React and Node.js I'm a quick learner and collaborate closely with clients to
				create efficient, scalable, and user-friendly solutions that solve
				real-world problems. Let's work together to bring your ideas to life!`;
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionSubText} text-center`}>Introduction</h2>

				<h2 className={`${styles.sectionHeadText} text-center`}>About</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px]  leading-[30px] text-center'>
				{about_text}
			</motion.p>

			<div className='mt-5 flex flex-wrap gap-10 justify-center'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

const ServiceCard = ({ index, title, icon }) => (
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
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

export default SectionWrapper(About, 'about');
