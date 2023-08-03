import style from "./Search.module.scss"

type PropsSearch = {
  setSearch: (value: string) => void
   setPageIndex: (value: number) => void
   search: string
};


const Search = ({ setSearch, setPageIndex, search }: PropsSearch) => {

  const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    
    setSearch(event.target.value);
    setPageIndex(1);
  };

  return (
    <div className={style.form}>
      <input
       className={style.form__field}
        onChange={handleInputChange}
        placeholder="Search for characters"
        type="input"
        value={search}
        name="search"
        id="search"
        required
      />
       <label htmlFor="search"  className={style.label}>Search by Name</label>
    </div>
  );
};

export default Search;
