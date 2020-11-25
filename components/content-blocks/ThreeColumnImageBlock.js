import styles from '../../styles/content-block.module.scss'

function ThreeColumnImageBlock(props) {
  return (
    <div className={styles.contentBlock}>
      <img src={props.image1} />
      <img src={props.image2} />
      <img src={props.image3} />
      
      <style jsx>{`
        img {
          width: 33.333%;
          padding: 10px;
        }
      `}</style>
    </div>
  );
}

export default ThreeColumnImageBlock