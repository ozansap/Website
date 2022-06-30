import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, TargetAndTransition, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import styles from '../styles/Welcome.module.scss';


type props = {
  activeSection: number
}

const Welcome: FC<props> = ({
  activeSection
}) => {
  const welcomeAnimation = () => {
    return (activeSection == 0) ? 
      {
        x: "0",
        opacity: 1,
      } : 
      {
        x: "10vw",
        opacity: 0,
        transition: {
          duration: 0.5
        }
      }
  }

  const scrollAnimation = (): TargetAndTransition => {
    return (activeSection == 0) ?
      {
        y: [0, -30, 0],
        transition: {
          times: [0.5, 0.85, 1],
          duration: 3,
          ease: "easeOut",
          repeat: Infinity
        }
      } :
      {
        opacity: 0,
      }
  }

  return (
    <section className={styles.Welcome}>
      <motion.div className={styles.Text} animate={welcomeAnimation()}>
        <h2>Welcome to my website</h2>
      </motion.div>
      <div className={"center-horizontal"}>
        <motion.div className={styles.Scroll} animate={scrollAnimation()}>
          <FontAwesomeIcon icon={faChevronDown}/>
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome;