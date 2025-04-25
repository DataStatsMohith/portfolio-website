import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='data-science'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I Am</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a <span className="text-[#915EFF] font-bold">Data Scientist</span> with an 
        MSc in Data Science from <span className="text-[#915EFF] font-bold">Loughborough University</span> (2023-2024). 
        With <span className="text-[#915EFF] font-bold">IBM Data Science</span> and 
         <span className="text-[#915EFF] font-bold"> Google Advanced Data Analytics</span> certifications, I specialize in 
         <span className="text-[#915EFF] font-bold"> machine learning, predictive modeling, and data-driven insights</span>. 
        Previously, I worked as an <span className="text-[#915EFF] font-bold">Analyst at Capgemini</span> (2021-2023), 
        contributing to <span className="text-[#915EFF] font-bold">data analytics and business intelligence</span> for the 
         <span className="text-[#915EFF] font-bold"> Disney project</span>.  
        I am passionate about using <span className="text-[#915EFF] font-bold">AI and statistical models</span> to drive 
        <span className="text-[#915EFF] font-bold">data-driven decisions</span> that impact businesses.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
