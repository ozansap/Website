import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Footer.module.scss';


const contacts = [
  {
    icon: faEnvelope,
    link: "mailto:me@ozansap.com",
  },
  {
    icon: faGithub,
    link: "https://github.com/ozansap"
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/ozan-sap/"
  }
]

type props = {
  
}

const Footer: FC<props> = () => {

  return (
    <footer className={styles.Footer}>
      <a>me@ozansap.com</a>
      <div className={styles.Contacts}>
        {contacts.map((p, i) => (
          <Link href={p.link} key={i}>
            <a className={styles.Button} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={p.icon} />
            </a>
          </Link>
        ))}
      </div>
      <p>
        © {(new Date).getFullYear()} Ozan Sap • Icons by&nbsp;
        <a href="https://fontawesome.com/icons" target="_blank" rel="noopener noreferrer">
          FontAwesome
        </a>
        &nbsp;and&nbsp;
        <a href="https://icons8.com/icons" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
      </p>
    </footer>
  )
}

export default Footer;