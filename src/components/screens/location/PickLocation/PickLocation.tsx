import React from 'react';
import styles from "./PickLocation.module.scss"

type OptionProps = {
  name: string
  changeID: (value: number) => void
  total: number
}

const PickLocation = ({ name, changeID, total }: OptionProps) => {
  
  const options = [];

  for (let i = 0; i < total; i++) {
    const value = i + 1;
    options.push(
      <option value={value} key={value}>
        {name} - {value}
      </option>
    );
  }
  return (
    <div className={styles.box}>
           <p className={styles.box_text}>Pick Location</p>
    <select className={styles.select} onChange={e => changeID(parseInt(e.target.value))}  id={name}>
       <option value="1" disabled>
        Choose...
      </option>
      {options}
  </select>
  </div>
  )
}

export default PickLocation;
