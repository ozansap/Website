import { FC } from 'react';
import styles from '../styles/AboutMe.module.scss';
import Introduction from './Introduction';
import Skills from './Skills';


type props = {
  activeSection: number;
}

const AboutMe: FC<props> = ({
  activeSection
}) => {

  return (
    <section className={styles.AboutMe} id="about-me">
      <Introduction activeSection={activeSection} />
      <Skills />
    </section>
  )
}

export default AboutMe;