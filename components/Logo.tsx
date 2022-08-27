import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Logo.module.scss';

const vLogo = {
  "y": {
    top: "30vh",
    left: "10vw",
    fontSize: "5rem",
  },
  "yd": {
    top: "30vh",
    left: "10vw",
    fontSize: "8rem",
  },
  "n": {
    top: "-1vh",
    left: "1vw",
    fontSize: "0rem",
  },
  "nd": {
    top: "0.5vh",
    left: "3vw",
    fontSize: "3rem",
  }
}

type props = {
  activeSection: number,
  width: number
}

const Logo: FC<props> = ({
  activeSection, width
}) => {

  let animate = activeSection === 0 ? "y" : "n";
  if (width >= 750) animate += "d";

  return (
    <motion.div 
      className={styles.Logo}
      animate={animate} 
      variants={vLogo} 
      initial={{top: "30vh", left: "10vw", fontSize: (width < 750) ? "5rem" : "8rem"}}
    >
      <Link href="/" replace>
        <a>OzanSap</a>
      </Link>
    </motion.div>
  )
}

export default Logo;