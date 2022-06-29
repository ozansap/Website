import Link from 'next/link';
import { FC, useState } from 'react';
import styles from '../styles/Navigation.module.scss';


type props = {
  
}

const Navigation: FC<props> = () => {
  const [activePage, setActivePage] = useState("Home");

  const checkActive = (s: string) => (s === activePage) ? styles.active : "";

  return (
    <div className={styles.Navigation}>
      <Link href="/">
        <a className={styles.Logo}>
          ozansap
        </a>
      </Link>
      <div className={styles.Buttons}>
        <Link href="/">
          <a className={`${styles.Button} ${checkActive("home")}`}>
            Home
          </a>
        </Link>
        <Link href="/about-me">
          <a className={`${styles.Button} ${checkActive("about-me")}`}>
            About Me
          </a>
        </Link>
        <Link href="/">
          <a className={`${styles.Button} ${checkActive("projects")}`}>
            Projects
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;
