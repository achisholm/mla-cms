import styles from '../../styles/content-block.module.scss'

function TwoColumnImageBlock(props) {
    return (
      <div className={styles.contentBlock}>
        <img className="img1" src={props.image1} />
        <img className="img2" src={props.image2} />
  
        <style jsx>{`
          img {
            padding: 10px;
          }

          .img1 {
            width: 66.666%;
          }
          
          .img2 {
            width: 33.333%;
          }
        `}</style>
      </div>
    
    );
}

export default TwoColumnImageBlock