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
        <Link href="/" replace>
          <motion.div 
            className={styles.Button} 
            animate={buttonAnimation(0)}
          >
            <a>Welcome</a>
          </motion.div>
        </Link>
        <Link href="/#about-me" replace>
          <motion.div
            className={styles.Button}
            animate={buttonAnimation(1)}
          >
            <a>About Me</a>
          </motion.div>
        </Link>
        <Link href="/#projects" replace>
          <motion.div 
            className={styles.Button} 
            animate={buttonAnimation(2)}
          >
            <a>Projects</a>
          </motion.div>
        </Link>
      </div>
  
      <motion.div className={styles.Highlight} animate={highlightAnimation()} />
      <div className={styles.Border} />
    </div>
  )
}

export default Navigation;