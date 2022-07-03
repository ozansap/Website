import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../styles/ProjectDetails.module.scss';


type props = {
  selectedProject: string,
  setSelectedProject: Dispatch<SetStateAction<string>>
}

const ProjectDetails: FC<props> = ({
  selectedProject, setSelectedProject
}) => {

  return (
    <div className={styles.ProjectDetails}>

    </div>
  )
}

export default ProjectDetails;