import { FC } from 'react';
import styles from '../styles/Main.module.scss';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Projects from './Projects';
import Welcome from './Welcome';


type props = {
  
}

const Main: FC<props> = () => {

  return (
    <div className={styles.Main}>
      <Welcome />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

export default Main;
