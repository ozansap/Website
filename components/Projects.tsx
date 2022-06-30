import { CSSProperties, FC } from 'react';
import styles from '../styles/Projects.module.scss';
import BackendProjects from './BackendProjects';
import FrontendProjects from './FrontendProjects';
import InfiniteScroll from './InfiniteScroll';

const containerStyle: CSSProperties = {
  fontSize: "2em",
  margin: "3em 0 3em 0",
}

const scrollerStyle: CSSProperties = {
  animationDuration: "20s",
  animationDirection: "reverse"
}

type props = {
  
}

const Projects: FC<props> = () => {

  return (
    <section className={styles.Projects} id="projects">
      <InfiniteScroll 
        text="Projects"
        repeat={7}
        containerStyle={containerStyle}
        scrollerStyle={scrollerStyle} />
      <FrontendProjects />
      <BackendProjects />
    </section>
  )
}

export default Projects;