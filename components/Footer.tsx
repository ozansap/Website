import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Footer.module.scss';


type props = {
  
}

const Footer: FC<props> = () => {

  return (
    <Link href="/">
      <a className={styles.Footer}>
        OzanSap
      </a>
    </Link>
  )
}

export default Footer;



