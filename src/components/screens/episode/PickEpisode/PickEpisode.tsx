import React from 'react'
import styles from "./Pickepisode.module.scss"

type OptionProps = {
    name: string
    changeID: (value: number) => void
    total: number
  }
const PickEpisode = ({total,name,changeID}: OptionProps) => {
    const options = [];
    for (let i = 0; i < total; i++) {
      const value = i + 1;
      options.push(
        <option  className={styles.option}  value={value} key={value} >
         Episode - {value}
        </option>
      );
    }
    return (
      <div className={styles.box}>
        <p className={styles.box_text}>Pick Episodes</p>
      <select  className={styles.select} onChange={e => changeID(parseInt(e.target.value))}  id={name}>
         <option value="1" disabled>
          Choose...
        </option>
        {options}
    </select>
    </div>
    )
}

export default PickEpisode
