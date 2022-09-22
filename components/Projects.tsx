import { LayoutGroup, motion } from 'framer-motion';
import { CSSProperties, FC } from 'react';
import styles from '../styles/Projects.module.scss';
import InfiniteScroll from './InfiniteScroll';
import ProjectCard from './ProjectCard';

const containerStyle: CSSProperties = {
  fontSize: "2em",
  marginBottom: "3em",
}

const scrollerStyle: CSSProperties = {
  animationDuration: "20s",
  animationDirection: "reverse"
}

const projects = [
  {
    name: "Physics",
    type: "Frontend",
    thumbnail: "/thumbnails/physics.png",
    preview: "/previews/physics.gif",
    description: "Impulse based 2D physics playground made with vanilla HTML, CSS and JS",
    tags: ["Vanilla", "HTML", "CSS", "JavaScript", "WebApp", "Canvas"],
    favourite: false,
    explanation: "",
    exploration: ""
  },
  {
    name: "Maze",
    type: "Frontend",
    thumbnail: "/thumbnails/maze.png",
    preview: "/previews/maze.gif",
    description: "Demonstration of maze generation and solution using randomized depth first search",
    tags: ["React", "Responsive", "SCSS", "Data Structures & Algorithms"],
    favourite: false,
    explanation: "",
    exploration: ""
  },
  {
    name: "Planner",
    type: "Frontend",
    thumbnail: "/thumbnails/planner.png",
    preview: "/previews/planner.gif",
    description: "A web app to plan, organize and track your habits and responsibilities",
    tags: ["React", "TypeScript", "SCSS", "WebApp"],
    favourite: true,
    explanation: "",
    exploration: ""
  },
  {
    name: "Sneakers",
    type: "Frontend",
    thumbnail: "/thumbnails/sneakers.png",
    preview: "/previews/sneakers.gif",
    description: "A web app to check if you should wear your sneakers or boots outside",
    tags: ["React", "TypeScript", "SCSS", "API", "WebApp", "Responsive"],
    favourite: false,
    explanation: "",
    exploration: ""
  },
  {
    name: "This Website!",
    type: "Frontend",
    thumbnail: "/thumbnails/portfolio.png",
    preview: "/previews/maze.gif",
    description: "Personal portfolio website made with NextJS.\nYou are in this website right now!",
    tags: ["NextJS", "React", "TypeScript", "SCSS", "Responsive"],
    favourite: true,
    explanation: "",
    exploration: ""
  },
]

type props = {
  
}

const Projects: FC<props> = () => {
  return (
    <section className={styles.Projects} id="projects">
      <InfiniteScroll
        text="Projects"
        repeat={7}
        containerStyle={containerStyle}
        scrollerStyle={scrollerStyle}
      />

      <div className={styles.List}>
        <LayoutGroup>
          {[...projects].reverse().map((p, i) => (
            <ProjectCard
              key={i}
              {...p}
              reverse={!!(i % 2)}
            />
          ))}
        </LayoutGroup>
      </div>
    </section>
  )
}

export default Projects;