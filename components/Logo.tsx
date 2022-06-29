import { useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Logo.module.scss';


type props = {
  
}

const Logo: FC<props> = () => {
  const { scrollYProgress } = useViewportScroll();


  return (
    <Link href="/">
      <a className={styles.Logo}>
        OzanSap
      </a>
    </Link>
  )
}

export default Logo;



