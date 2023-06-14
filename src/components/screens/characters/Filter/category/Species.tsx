import FilterBtn from "../FilterBtn";
import style from '../Filter.module.scss'

 type SpeciesProps = {
  setSpecies: (value: string) => void
  setPageNumber: (value: number) => void
}

const Species = ({ setPageNumber,setSpecies }: SpeciesProps) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet"
  ];
  return (
    <div>
      <div className={style.name}>Species</div>
      <div className="flex flex-col gap-[1rem]">
        {species.map((items, index) => {
          return (
            <FilterBtn
              name="species"
              index={index}
              key={index}
              setPageNumber={setPageNumber}
              task={setSpecies}
              input={items}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Species;
