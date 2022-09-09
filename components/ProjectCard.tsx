import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';
import combine from '../lib/combine';
import styles from '../styles/ProjectCard.module.scss';


type props = {
  name: string,
  type: string,
  thumbnail: string,
  description: string,
  tags: string[],
  favourite: boolean,
  explanation: string,
  exploration: string,
  reverse: boolean,
}

const ProjectCard: FC<props> = ({
  name, type, thumbnail, description, tags, favourite, explanation, exploration, reverse
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className={combine(styles.ProjectCard, [reverse, styles.reverse])} 
      whileHover={{scale: 1.02}}
      onClick={() => setExpanded(!expanded)}
      style={{borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 20px"}}
      transition={{}}
    >
      <motion.div layout className={styles.Main}>
        <motion.img layout src={thumbnail} draggable="false"/>
        <motion.div layout className={styles.Text}>
          <motion.div layout className={combine(styles.Header, "mobile-only")}>
            <motion.div layout className={styles.Info}>
              <motion.h2 layout>{name}</motion.h2>
              <motion.h3 layout>{type}</motion.h3>
            </motion.div>
            <motion.div layout>
              {favourite && (
                <motion.h3 layout className={combine(styles.Favourite, [favourite, styles.active])}>
                  ★ Favourite
                </motion.h3>
              )}
            </motion.div>
          </motion.div>
          <motion.div layout className={combine(styles.Header, "mobile-hidden")}>
            <motion.h2 layout>{name}</motion.h2>
            <motion.div layout>
              {favourite && (
                <motion.h3 layout className={combine(styles.Favourite, [favourite, styles.active])}>
                  ★ Favourite
                </motion.h3>
              )}
            </motion.div>
            <motion.h3 layout>{type}</motion.h3>
          </motion.div>
          <motion.p layout>{description}</motion.p>
          <motion.div layout className={styles.Tags}>
            {tags.map((t, i) => (
              <motion.p layout key={i}>{t}</motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div layout className={styles.Expander}>
        <motion.div layout>
          <motion.div layout></motion.div>
          <motion.div layout></motion.div>
        </motion.div>
        {expanded && <FontAwesomeIcon icon={faChevronUp} />}
        {!expanded && <FontAwesomeIcon icon={faChevronDown} />}
        <motion.div layout>
          <motion.div layout></motion.div>
          <motion.div layout></motion.div>
        </motion.div>
      </motion.div>
      {expanded && (
        <motion.div 
          className={styles.Expansion}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2}}
        >
          <motion.div className={styles.Links}>
            <Link href="/" replace>
              <motion.a className={styles.Visit}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                <motion.h3>Visit</motion.h3>
              </motion.a>
            </Link>
            <Link href="/" replace>
              <motion.a className={styles.Github}>
                <FontAwesomeIcon icon={faGithub}/>
                <motion.h3>Source</motion.h3>
              </motion.a>
            </Link>
          </motion.div>
          <motion.div className={styles.Details}>
            <motion.div className={styles.Explanation}>
              <motion.h3>Explanation</motion.h3>
              <motion.p>{explanation}</motion.p>
            </motion.div>
            <motion.div className={styles.Exploration}>
              <motion.h3>Exploration</motion.h3>
              <motion.p>{exploration}</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>      
  )
}

export default ProjectCard;