import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from '../styles/Tooltip.module.scss';

const vTooltip = {
  "show": {
    opacity: 1,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "anticipate"
    }
  },
  "hide": {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "anticipate"
    }
  }
}

type props = {
  text: string;
  children: JSX.Element;
}

const Tooltip: React.FC<props> = ({
  text, children
}) => {

  return (
    <motion.div className={styles.Container} initial="hide" whileHover="show" animate="hide">
      <motion.div className={styles.Tooltip} variants={vTooltip}>
        {text}
      </motion.div>
      {children}
    </motion.div>    
  )
}

export default Tooltip;