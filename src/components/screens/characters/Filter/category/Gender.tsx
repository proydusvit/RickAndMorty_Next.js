import FilterBtn from "../FilterBtn";
import style from '../Filter.module.scss'
type GenderProps = {
  setGender: (value: string) => void
  setPageNumber: (value: number) => void
}

const Gender = ({ setPageNumber,  setGender }: GenderProps) => {
  const genders = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <div className={style.name}>Gender</div>
      <div className="flex flex-col gap-[1rem]">
        {genders.map((items, index) => {
          return (
            <FilterBtn
              name="gender"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={ setGender}
              input={items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gender;
