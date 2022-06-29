import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Navigation.module.scss';
import { motion, TargetAndTransition } from "framer-motion";


type props = {
  activeSection: number,
  width: number
}

const Navigation: FC<props> = ({
  activeSection, width
}) => {
  const buttonAnimation = (active: number): TargetAndTransition =>  {
    return (active === activeSection) ?
      {
        y: "0.5rem",
        color: "#1a1a1a"
      } :
      {
        y: "0",
        color: "#b3b3b3"
      }
  }

  const highlightAnimation = (): TargetAndTransition => {
    return {
      x: `${(activeSection) * ((width > 1100 ? 5 : 2) + 8)}rem`
    }
  }

  return (
    <div className={styles.Navigation + " mobile-hidden"}>
      <div className={styles.Buttons}>
        <motion.div 
          className={styles.Button} 
          animate={buttonAnimation(0)}
          whileHover={{ 
            backgroundColor: "rgba(255,255,255,0.1)", 
            color: "white", 
            transition: { duration: 0.1 }
          }}>
          <Link href="/#welcome">
            <a>Welcome</a>
          </Link>
        </motion.div>
        <motion.div 
          className={styles.Button} 
          animate={buttonAnimation(1)}
          whileHover={{ 
            backgroundColor: "rgba(255,255,255,0.1)", 
            color: "white", 
            transition: { duration: 0.1 }
          }}>
          <Link href="/#about-me">
            <a>About Me</a>
          </Link>
        </motion.div>
        <motion.div 
          className={styles.Button} 
          animate={buttonAnimation(2)}
          whileHover={{ 
            backgroundColor: "rgba(255,255,255,0.1)", 
            color: "white", 
            transition: { duration: 0.1 }
          }}>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </motion.div>
      </div>
  
      <motion.div className={styles.Highlight} animate={highlightAnimation()} />
      <div className={styles.Border} />
    </div>
  )
}

export default Navigation;
