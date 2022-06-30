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
        fontSize: (width < 750) ? "5rem" : "8rem"
      } : (width < 750) ?
      {
        top: "-1vh",
        left: "1vw",
        fontSize: "0rem"
      } :
      {
        top: "0.5vh",
        left: "3vw",
        fontSize: "3rem"
      }
  }

  return (
    <motion.div 
      className={styles.Logo}
      animate={logoAnimation()}
    >
      <Link href="/" replace>
        <a>OzanSap</a>
      </Link>
    </motion.div>
  )
}

export default Logo;



