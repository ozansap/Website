import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from '../styles/AboutMe.module.scss';


type props = {
  activeSection: number;
}

const AboutMe: FC<props> = ({
  activeSection
}) => {
  // const titleAnimation = () => {
  //   return (activeSection == 1) ? 
  //     {
  //       top: "30vh",
  //       left: "10vw",
  //       fontSize: (width < 750) ? "5rem" : "8rem"
  //     } : (width < 750) ?
  //     {
  //       top: "-1vh",
  //       left: "1vw",
  //       fontSize: "0rem"
  //     } :
  //     {
  //       top: "0.5vh",
  //       left: "3vw",
  //       fontSize: "3rem"
  //     }
  // }

  // const textAnimation = () => {
  //   return (activeSection == 1) ? 
  //     {
  //       top: "30vh",
  //       left: "10vw",
  //       fontSize: (width < 750) ? "5rem" : "8rem"
  //     } : (width < 750) ?
  //     {
  //       top: "-1vh",
  //       left: "1vw",
  //       fontSize: "0rem"
  //     } :
  //     {
  //       top: "0.5vh",
  //       left: "3vw",
  //       fontSize: "3rem"
  //     }
  // }

  return (
    <section className={styles.AboutMe} id="about-me">
      <div className={styles.Introduction}>
        <motion.div>
          <motion.h2>About Me</motion.h2>
        </motion.div>
        <motion.div>
          <motion.p>
            This is my introduction <br />
            Test Test <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, mollitia. <br />
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe;