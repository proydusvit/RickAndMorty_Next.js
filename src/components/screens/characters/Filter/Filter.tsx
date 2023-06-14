import React from "react";
import Gender from "./category/Gender";
import Status from "./category/Status";
import Species from "./category/Species";
import style from './Filter.module.scss'

type FilterProps = {
  setPageNumber: (value: number) => void
  updateStatus: (value: string) => void
  setGender: (value: string) => void
  setSpecies: (value: string) => void
}
const Filter = ({
  updateStatus,
  setGender,
  setSpecies,
  setPageNumber
}:  FilterProps) => {

  let clear = () =>  {
    updateStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload();
  };

  return (
    <div  className={style.filter}>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className={style.clear}
      >
        Clear Filters
      </div>
    <ul className={style.box}>

    <li className={style.item}> <Gender setPageNumber={setPageNumber} setGender={ setGender} /></li> 
    <li className={style.item}>  <Species setPageNumber={setPageNumber} setSpecies={setSpecies} /></li> 
    <li className={style.item}>  <Status setPageNumber={setPageNumber} setStatus={updateStatus} /></li> 
      </ul>
    </div>
  );
};

export default Filter;
