import { CSSProperties, FC } from 'react';
import styles from '../styles/InfiniteScroll.module.scss';

type props = {
  text: string;
  repeat: number;
  containerStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

const InfiniteScroll: FC<props> = ({
  text, repeat, containerStyle, scrollerStyle
}) => {

  return (
    <div className={styles.InfiniteScroll} style={containerStyle}>
      <div className={styles.Scroller} style={scrollerStyle}>
        {[...Array(repeat)].map((e, i) => (
          <h1 key={i}>{text} •&nbsp;</h1>
        ))}
      </div>
      <div className={styles.Scroller} style={scrollerStyle}>
        {[...Array(repeat)].map((e, i) => (
          <h1 key={i}>{text} •&nbsp;</h1>
        ))}
      </div>
    </div>
  )
}

export default InfiniteScroll;