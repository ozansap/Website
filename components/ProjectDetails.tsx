import { motion } from 'framer-motion';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../styles/ProjectDetails.module.scss';


type props = {
  id: number,
  name: string,
  type: string,
  preview: string,
  description: string,
  tags: string[],
  explanation: string,
  exploration: string,
  selectedProject: number,
  setSelectedProject: Dispatch<SetStateAction<number>>
}

const ProjectDetails: FC<props> = ({
  id, name, type, preview, description, tags, explanation, exploration, selectedProject, setSelectedProject
}) => {

  return (
    <motion.div className={styles.ProjectDetails}>
      <motion.div className={styles.Background} onClick={() => setSelectedProject(0)}/>
      <motion.div className={styles.Details}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem repudiandae qui velit iure, fugit, consectetur cupiditate possimus provident accusamus optio, ab officia ratione voluptatem doloribus nostrum quaerat quidem repellat labore quod expedita. Itaque nostrum autem reprehenderit facere provident, veniam ea tempore aspernatur enim nisi, iure atque est, exercitationem non sapiente temporibus laboriosam vitae vel excepturi? Ex, sunt. Doloremque rem error eaque harum eius officiis quae id culpa illo fugit nesciunt mollitia placeat nihil aliquid, sed excepturi repudiandae commodi earum, ut cumque nisi. Porro voluptates eos obcaecati repellat reiciendis tenetur. Corporis incidunt libero maiores a quia vel, eum fugiat mollitia!
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetails;