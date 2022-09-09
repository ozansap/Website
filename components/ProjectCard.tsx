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
      className={combine(styles.ProjectCard, [reverse, styles.reverse])} 
      whileHover={{scale: 1.02}}
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div className={styles.Main}>
        <motion.img src={thumbnail} draggable="false"/>
        <motion.div className={styles.Text}>
          <motion.div className={combine(styles.Header, "mobile-only")}>
            <motion.div className={styles.Info}>
              <motion.h2>{name}</motion.h2>
              <motion.h3>{type}</motion.h3>
            </motion.div>
            <motion.div>
              {favourite && (
                <motion.h3 className={combine(styles.Favourite, [favourite, styles.active])}>
                  ★ Favourite
                </motion.h3>
              )}
            </motion.div>
          </motion.div>
          <motion.div className={combine(styles.Header, "mobile-hidden")}>
            <motion.h2>{name}</motion.h2>
            <motion.div>
              {favourite && (
                <motion.h3 className={combine(styles.Favourite, [favourite, styles.active])}>
                  ★ Favourite
                </motion.h3>
              )}
            </motion.div>
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
      <motion.div className={styles.Expander}>
        <motion.div>
          <motion.div></motion.div>
          <motion.div></motion.div>
        </motion.div>
        {expanded && <FontAwesomeIcon icon={faChevronUp} />}
        {!expanded && <FontAwesomeIcon icon={faChevronDown} />}
        <motion.div>
          <motion.div></motion.div>
          <motion.div></motion.div>
        </motion.div>
      </motion.div>
      {expanded && (
        <motion.div className={styles.Expansion}>
          <motion.div className={styles.Links}>
            <Link href="/" replace>
              <a className={styles.Visit}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                <motion.h3>Visit</motion.h3>
              </a>
            </Link>
            <Link href="/" replace>
              <a className={styles.Github}>
                <FontAwesomeIcon icon={faGithub}/>
                <motion.h3>Source</motion.h3>
              </a>
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