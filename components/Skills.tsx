import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Skills.module.scss';

const skills = [
  {
    id: 1,
    name: "AWS",
    icon: "aws",
    level: "Competent"
  },
  {
    id: 2,
    name: "CSS",
    icon: "css",
    level: "Expert"
  },
  {
    id: 3,
    name: "Docker",
    icon: "docker",
    level: "Beginner"
  },
  {
    id: 4,
    name: "Figma",
    icon: "figma",
    level: "Competent"
  },
  {
    id: 5,
    name: "Git",
    icon: "git",
    level: "Expert"
  },
  {
    id: 6,
    name: "Heroku",
    icon: "heroku",
    level: "Competent"
  },
  {
    id: 7,
    name: "HTML",
    icon: "html",
    level: "Expert"
  },
  {
    id: 8,
    name: "JavaScript",
    icon: "javascript",
    level: "Expert"
  },
  {
    id: 9,
    name: "Minecraft",
    icon: "minecraft",
    level: "Expert"
  },
  {
    id: 10,
    name: "MongoDB",
    icon: "mongodb",
    level: "Proficient"
  },
  {
    id: 11,
    name: "MySQL",
    icon: "mysql",
    level: "Beginner"
  },
  {
    id: 12,
    name: "NextJS",
    icon: "nextjs",
    level: "Proficient"
  },
  {
    id: 13,
    name: "NodeJS",
    icon: "nodejs",
    level: "Proficient"
  },
  {
    id: 14,
    name: "React",
    icon: "react",
    level: "Expert"
  },
  {
    id: 15,
    name: "TypeScript",
    icon: "typescript",
    level: "Expert"
  },
  {
    id: 16,
    name: "VueJS",
    icon: "vuejs",
    level: "Beginner"
  },
]

const levels = ["Beginner", "Competent", "Proficient", "Expert"];

type props = {

}

const Skills: FC<props> = ({

}) => {

  return (
    <div className={styles.Skills}>
      <div className={styles.Header}>
        <div className={styles.Title}>
          <h2>Skills</h2>
        </div>
        <div className={styles.List}>
          {skills.map((s, i) => (
            <div className='center' key={i}>
              <Image src={`/icons/${s.icon}.png`} layout="fill"/>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.Main}>
        <div className={styles.Levels}>
          {levels.map((l, i) => (
            <div className={styles.Level} id={styles[l]} key={i}>
              <div className={styles.LevelTitle}>
                {l}
              </div>
              <div className={styles.LevelContent}>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;