import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { CSSProperties, FC, useState } from 'react';
import styles from '../styles/Projects.module.scss';
import InfiniteScroll from './InfiniteScroll';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

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
    id: 1,
    name: "Physics",
    type: "Frontend",
    thumbnail: "/thumbnails/physics.png",
    preview: "/previews/physics.gif",
    description: "Impulse based 2D physics playground made with vanilla HTML, CSS and JS",
    tags: ["Vanilla", "HTML", "CSS", "JavaScript", "WebApp", "Canvas"],
    explanation: "",
    exploration: ""
  },
  {
    id: 2,
    name: "Maze",
    type: "Frontend",
    thumbnail: "/thumbnails/maze.png",
    preview: "/previews/maze.gif",
    description: "Demonstration of maze generation and solution using randomized depth first search",
    tags: ["React", "Responsive", "SCSS", "Data Structures & Algorithms"],
    explanation: "",
    exploration: ""
  },
  {
    id: 3,
    name: "Planner",
    type: "Frontend",
    thumbnail: "/thumbnails/planner.png",
    preview: "/previews/planner.gif",
    description: "A web app to plan, organize and track your habits and responsibilities",
    tags: ["React", "TypeScript", "SCSS", "WebApp"],
    explanation: "",
    exploration: ""
  },
  {
    id: 4,
    name: "Sneakers",
    type: "Frontend",
    thumbnail: "/thumbnails/sneakers.png",
    preview: "/previews/sneakers.gif",
    description: "asd",
    tags: [],
    explanation: "",
    exploration: ""
  },
  {
    id: 5,
    name: "This Website!",
    type: "Frontend",
    thumbnail: "/thumbnails/portfolio.png",
    preview: "/previews/maze.gif",
    description: "asd",
    tags: [],
    explanation: "",
    exploration: ""
  },
]

type props = {
  
}

const Projects: FC<props> = () => {
  const [selectedProject, setSelectedProject] = useState(0);


  return (
    <section className={styles.Projects} id="projects">
      <InfiniteScroll
        text="Projects"
        repeat={7}
        containerStyle={containerStyle}
        scrollerStyle={scrollerStyle}
      />

      <div className={styles.List}>
        {projects.map((p, i) => (
          <ProjectCard
            key={i} {...p}
            reverse={!!(i % 2)}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            {...projects[selectedProject-1]}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects;