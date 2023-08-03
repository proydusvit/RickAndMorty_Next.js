import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import style from "./Detalis.module.scss";

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  try {
    const response = await axios.get(apiUrl);
    const character = response.data;

    return {
      props: {
        character
      }
    };
  } catch (error) {
    console.error("Error fetching character data:", error);
    return {
      props: {}
    };
  }
}

const CardDetails = ({ character }: any) => {
  const { back } = useRouter();

  return (
    <Layout title="Info">
      <button type="button" onClick={back} className={style.btn}>
        Go back
      </button>
      <div className={style.box}>
        <div>
          <img
            src={character.image}
            alt={character.name}
            width={400}
            height={400}
          />
        </div>

        <div className={style.border}>
          <div>
            <h1 className={style.name}>{character.name}</h1>
          </div>

          <div className={style.border_flex}>
            <div>
              <p className={style.text}>Status: {character.status}</p>
              <p className={style.text}>Species: {character.species}</p>
              <p className={style.text}>Gender: {character.gender}</p>
              <p className={style.text}>Origin: {character.origin.name}</p>
              <p className={style.text}>Location: {character.location.name}</p>
            </div>

            <div>
              <p className={style.text_id}># {character.id}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardDetails;
