import styles from '../../styles/content-block.module.scss'

function CaptionVideoBlock(props) {
  let platform = props.platform;
  let embedCode;
  
  if (platform == "YouTube") {
    embedCode = <div>Youtube embed code for {props.videoId} goes here</div>;
  } else if (platform == "Vimeo") {
    embedCode = <div>Vimeo embed code for {props.videoId} goes here</div>;
  }

  return (
    <div className={styles.contentBlock}>
      <div>
        <p>This is the Caption and Video Block</p>
        <h2>{props.captionTitle}</h2>
        <p>{props.captionBody}</p>
      </div>
      <div>{embedCode}</div>
    </div>
  );
}

export default CaptionVideoBlock