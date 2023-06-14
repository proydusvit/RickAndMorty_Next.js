import React from 'react'
import styles from "./Location.module.scss"

type LocationProps = {
  name: string
  dimension:string
  
}
const LocationInfo = ({name,   dimension}: LocationProps) => {
  return (
    <div className={styles.box}>
      <p className={styles.box_text}>Location name: {name === '' ? 'Unknown' : name}  </p>
      <p className={styles.box_text}>Dimension: {dimension} </p>
    </div>
  )
}

export default LocationInfo;




