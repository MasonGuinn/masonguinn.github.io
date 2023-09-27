import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
	return (
		<>
			<motion.div
				className='mb-10'
				variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What am I comfortable with?
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Technology</h2>
			</motion.div>
			<div className='flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map((tech, index) => (
					<motion.div
						variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
						className='w-28 h-28'
						key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, 'tech');
