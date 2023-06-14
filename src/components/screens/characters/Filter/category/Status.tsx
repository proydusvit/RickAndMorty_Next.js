import FilterBtn from "../FilterBtn";
import style from '../Filter.module.scss'

type StatusProps = {
  setStatus: (value: string) => void
  setPageNumber: (value: number) => void
}


const Status = ({ setPageNumber, setStatus }: StatusProps) => {
  const status = ["alive", "dead", "unknown"];
  return (
    <div>
      <div className={style.name}>Status</div>
      <div className="flex flex-col gap-[1rem]">
        {status.map((items, index) => {
          return (
            <FilterBtn
              name="status"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setStatus}
              input={items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Status;
