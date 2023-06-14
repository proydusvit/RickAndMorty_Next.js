import style from "./Filter.module.scss" 

type FilterBtnProps = {
  input: string
  task: (value: string) => void
  setPageNumber: (value: number) => void
  index: number
  name: string
}

const FilterBtn = ({ input, task, setPageNumber, index, name }: FilterBtnProps) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color:rgb(238,174,202);
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            setPageNumber(1);
          }}
          className={style.label}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
