import styles from '../../styles/content-block.module.scss'

function CaptionImageBlock(props) {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.caption}>
        <h2 className={styles.caption__title}>{props.captionTitle}</h2>
        <p className={styles.caption__body}>{props.captionBody}</p>
      </div>
      
      <img src={props.image} />
      
      <style jsx>{`
      img {
        width: 66.666%;
        padding: 10px;
      }
    `}</style>
    </div>
  );

}

export default CaptionImageBlock