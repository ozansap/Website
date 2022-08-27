import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Skills.module.scss';

const skills = [
  {
    id: 1,
    name: "React",
    img: "",
    level: "Expert"
  }
]

const levels = ["Beginner", "Competent", "Proficient", "Expert"];

type props = {

}

const Skills: FC<props> = ({

}) => {

  return (
    <div className={styles.Skills}>
      <div className={styles.List}>
        
      </div>
      <div className={styles.Main}>
        <div className={styles.Title}>
          <h2>Skills</h2>
        </div>
        
        <div className={styles.Levels}>
          {levels.map((l, i) => (
            <div className={styles.Level} key={i}>
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