import React from 'react'
import styles from "./Episode.module.scss";

type EpisodeProps = {
  name: string
  airDate:string
}
const EpisodeName = ({name, airDate}:EpisodeProps) => {
  return (
   
       <div className={styles.box}>
      <p className={styles.box_text}>Episode name : {name} </p>
      <p className={styles.box_text}>Air Date: {airDate}</p>
    </div>
  
   
  )
}

export default EpisodeName;
