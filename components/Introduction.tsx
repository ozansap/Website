import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from '../styles/Introduction.module.scss';

const vTitle = {
  "y": {
    opacity: 1,
    x: 0
  },
  "n": {
    opacity: 0,
    x: -100
  }
}

const vTextContainer = {
  "y": {
    borderColor: "rgba(255,255,255,1)",
    transition: {
      delay: 0.5,
      delayChildren: 1,
      staggerChildren: 0.5,
      duration: 0.2,
    }
  },
  "n": {
    borderColor: "rgba(255,255,255,0)",
  }
}

const vText = {
  "y": {
    opacity: 1,
    x: 0
  },
  "n": {
    opacity: 0,
    x: 100
  }
}

type props = {
  activeSection: number;
}

const Introduction: FC<props> = ({
  activeSection
}) => {

  return (
    <div className={styles.Introduction}>
      <motion.div 
        animate={activeSection === 1 ? "y" : "n"} 
        variants={vTitle} 
        initial={{x: "-100px", opacity: 0}}
      >
        <motion.h2>About Me</motion.h2>
      </motion.div>
      <motion.div 
        animate={activeSection === 1 ? "y" : "n"} 
        variants={vTextContainer} 
        initial={{borderColor:"rgba(255,255,255,0)"}}
      >
        <motion.p variants={vText} initial={{x: "100px", opacity: 0}}>
          This is my introduction
        </motion.p>
        <motion.p variants={vText} initial={{x: "100px", opacity: 0}}>
          Text Text
        </motion.p>
        <motion.p variants={vText} initial={{x: "100px", opacity: 0}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quod!
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Introduction;