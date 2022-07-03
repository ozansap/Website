import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import combine from '../lib/combine';
import styles from '../styles/ProjectCard.module.scss';


type props = {
  name: string,
  type: string,
  thumbnail: string,
  description: string,
  tags: string[],
  reverse: boolean,
  setSelectedProject: Dispatch<SetStateAction<string>>
}

const ProjectCard: FC<props> = ({
  name, type, thumbnail, description, tags, reverse, setSelectedProject
}) => {

  return (
    <motion.div className={combine(styles.ProjectCard, [reverse, styles.reverse])} whileHover={{scale: 1.02}}>
      <motion.img src={thumbnail}/>
      <motion.div className={styles.Text}>
        <motion.div className={styles.Header}>
          <motion.h2>{name}</motion.h2>
          <motion.h3>{type}</motion.h3>
        </motion.div>
        <motion.p>{description}</motion.p>
        <motion.div className={styles.Tags}>
          {tags.map((t, i) => (
            <motion.p key={i}>{t}</motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>      
  )
}

export default ProjectCard;