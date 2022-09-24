import { motion } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../lib/useIntersectionObserver';
import styles from '../styles/Skills.module.scss';
import Tooltip from './Tooltip';

const skills = [
  {
    name: "AWS",
    icon: "aws",
    level: "Competent",
    sorted: false
  },
  {
    name: "CSS",
    icon: "css",
    level: "Expert",
    sorted: false
  },
  {
    name: "Docker",
    icon: "docker",
    level: "Beginner",
    sorted: false
  },
  {
    name: "Figma",
    icon: "figma",
    level: "Competent",
    sorted: false
  },
  {
    name: "Git",
    icon: "git",
    level: "Proficient",
    sorted: false
  },
  {
    name: "Heroku",
    icon: "heroku",
    level: "Competent",
    sorted: false
  },
  {
    name: "HTML",
    icon: "html",
    level: "Expert",
    sorted: false
  },
  {
    name: "JavaScript",
    icon: "javascript",
    level: "Expert",
    sorted: false
  },
  {
    name: "Minecraft",
    icon: "minecraft",
    level: "Proficient",
    sorted: false
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: "Proficient",
    sorted: false
  },
  {
    name: "MySQL",
    icon: "mysql",
    level: "Beginner",
    sorted: false
  },
  {
    name: "NextJS",
    icon: "nextjs",
    level: "Proficient",
    sorted: false
  },
  {
    name: "NodeJS",
    icon: "nodejs",
    level: "Proficient",
    sorted: false
  },
  {
    name: "React",
    icon: "react",
    level: "Expert",
    sorted: false
  },
  {
    name: "TypeScript",
    icon: "typescript",
    level: "Expert",
    sorted: false
  },
  {
    name: "VueJS",
    icon: "vuejs",
    level: "Beginner",
    sorted: false
  },
]

const levels = ["Beginner", "Competent", "Proficient", "Expert"];

type props = {

}

const Skills: FC<props> = ({

}) => {
  const [order, setOrder] = useState([...skills].sort(() => Math.random() - 0.5));
  const [ordered, setOrdered] = useState(false);
  const ref = useRef(null);
  const intersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (!intersecting || ordered) return;

    const move = (i: number) => {
      let newOrder = [...order];
      newOrder[i].sorted = true;
      setOrder(newOrder);
    }

    setTimeout(() => {
      setOrdered(true);

      const stagger = 300;
      order.forEach((x, i) => setTimeout(() => move(i), i * stagger));
    }, 500);
  }, [intersecting, order, ordered])

  return (
    <div className={styles.Skills}>
      <div className={styles.Title}>
        <h2>Skills</h2>
      </div>
      <div className={styles.Main}>
        <div className={styles.Levels}>
          {levels.map((l, i) => (
            <div className={styles.Level} id={styles[l]} key={i}>
              <div className={styles.LevelTitle}>
                {l}
              </div>
              <div className={styles.LevelContent}>
                {order.filter(x => x.level === l).map((s, j) => (
                  <div className='center' key={j}>
                    {s.sorted && (
                      <Tooltip text={s.name}>
                        <motion.img src={`/icons/${s.icon}.png`} layoutId={s.name}/>
                      </Tooltip>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.Holder}>
          {skills.map((s, i) => (
            <div className='center' key={i}>
              {!s.sorted && (
                <motion.img src={`/icons/${s.icon}.png`} layoutId={s.name}/>
              )}
            </div>
          ))}
        </div>
      </div>
      <div ref={ref} id="intersectionObserver" />
    </div>
  )
}

export default Skills;