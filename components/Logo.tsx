import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Logo.module.scss';


type props = {
  activeSection: number,
  width: number
}

const Logo: FC<props> = ({
  activeSection, width
}) => {
  const logoAnimation = () => {
    return (activeSection == 0) ? 
      {
        top: "30vh",
        left: "10vw",
        fontSize: (width > 750) ? "8rem" : "5rem"
      } : 
      {
        top: "0.5vh",
        left: "3vw",
        fontSize: (width > 750) ? "3rem" : "0rem"
      }
  }

  return (
    <motion.div 
      className={styles.Logo}
      animate={logoAnimation()}
    >
      <Link href="/">
        <a>OzanSap</a>
      </Link>
    </motion.div>
  )
}

export default Logo;



