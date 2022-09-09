import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Navigation.module.scss';
import { motion } from "framer-motion";
import combine from '../lib/combine';


type props = {
  activeSection: number,
}

const Navigation: FC<props> = ({
  activeSection
}) => {

  return (
    <div className={styles.Navigation + " mobile-hidden"}>
      <div className={styles.Buttons}>
          <motion.div className={styles.Button}>
            <Link href="/" replace>
              <motion.a className={combine([activeSection == 0, styles.active])}>Welcome</motion.a>
            </Link>
            {activeSection === 0 && (
              <motion.div className={styles.Highlight} layoutId="highlight" />
            )}
          </motion.div>

          <motion.div className={styles.Button}>
            <Link href="/#about-me" replace>
              <motion.a className={combine([activeSection == 1, styles.active])}>About Me</motion.a>
            </Link>
            {activeSection === 1 && (
              <motion.div className={styles.Highlight} layoutId="highlight" />
            )}
          </motion.div>
          
          <motion.div className={styles.Button}>
            <Link href="/#projects" replace>
              <motion.a className={combine([activeSection == 2, styles.active])}>Projects</motion.a>
            </Link>
            {activeSection === 2 && (
              <motion.div className={styles.Highlight} layoutId="highlight" />
            )}
          </motion.div>
      </div>
    </div>
  )
}

export default Navigation;