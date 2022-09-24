import { motion } from 'framer-motion';
import { FC } from 'react';
import markdown from '../lib/markdown';
import styles from '../styles/Introduction.module.scss';

const introduction = [
 "Hello, I am Ozan Sap!",
 "I am currently studying [Computer Science at RWTH Aachen]",
 "I like learning by [experimenting] and [experiencing]",
 "I have a few [NodeJS] projects and [React] websites",
 "I create websites [fully by coding] instead of using site builders like WordPress",
 "This allows me to create the [website I imagine] rather than the one the builder forces me to"
]

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
        {introduction.map((p, i) => (
          <motion.p 
            key={i}
            variants={vText}
            initial={{x: "100px", opacity: 0}}
            dangerouslySetInnerHTML={{__html: markdown(p)}}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Introduction;