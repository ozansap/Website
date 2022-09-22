import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from '../styles/Tooltip.module.scss';

const vTooltip = {
  "show": {
    pointerEvents: "auto" as "auto",
    opacity: 1,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "anticipate"
    }
  },
  "hide": {
    pointerEvents: "none" as "none",
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "anticipate"
    }
  }
}

type props = {
  text?: string;
  children: JSX.Element;
}

const Tooltip: FC<props> = ({
  text, children
}) => {

  return (
    <motion.div className={styles.Container} initial="hide" whileHover="show" animate="hide">
      {text && (
        <motion.p className={styles.Tooltip} variants={vTooltip}>
          {text}
        </motion.p>
      )}
      {children}
    </motion.div>
  )
}

export default Tooltip;