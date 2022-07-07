import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../styles/Main.module.scss';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Projects from './Projects';
import Welcome from './Welcome';


type props = {
  activeSection: number,
  setActiveSection: Dispatch<SetStateAction<number>>
}

const Main: FC<props> = ({
  activeSection, setActiveSection
}) => {

  return (
    <div className={styles.Main}>
      <Welcome 
        activeSection={activeSection}
      />
      <AboutMe 
        activeSection={activeSection}
      />
      <Projects />
      <Footer />
    </div>
  )
}

export default Main;