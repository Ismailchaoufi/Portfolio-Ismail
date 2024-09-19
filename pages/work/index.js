// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/* text */}
                    <div className='text-center flex xl:w-[38vw] flex-col lg:text-left mb-4 
                    xl:mb-0'>
                        <motion.h2 
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 xl:mt-12'>
                            My work <span className='text-accent'>.</span>
                        </motion.h2>
                        <motion.p 
                          variants={fadeIn('up', 0.4)}
                          initial='hidden'
                          animate='show'
                          exit='hidden'
                          className='mb-4 max-w-[408px] mx-auto lg:mx-0' 
                        >
                            Browse through a collection of my projects, each demonstrating my expertise in backend development and system design. While these projects are not live, you can explore the code and documentation on GitHub by clicking the links provided. Each project highlights different aspects of my work, including the technologies used, challenges faced, and solutions implemented. Click on any project to dive deeper into the source code and see how I've brought my ideas to life.
                        </motion.p>
                    </div>
                    {/*slider */}
                    <motion.div 
                      variants={fadeIn('down', 0.6)}
                      initial='hidden'
                      animate='show'
                      exit='hidden'
                      className='w-full xl:max-w-[65%]' 
                    >
                      <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;