
import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import PickEpisode from "@/components/screens/episode/PickEpisode/PickEpisode";
import EpisodeName from "@/components/screens/episode/EpisodeName/EpisodeName";
import Card from "@/components/screens/characters/Card/Card";
import   { useState, useEffect } from "react";

type EpisodenfoProps = {
  air_date: string
  name: string
}

const EpisodePage: NextPage = () => {
  const [results, setResults] = useState([] as any[]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<EpisodenfoProps>({
    air_date: '',
    name: ''
  });
  const { air_date, name } = info;
  const [id, setID] = useState(3);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x : RequestInfo | URL) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <Layout title="Episode">
      <div style={{
       display:"flex",
       justifyContent:"space-around"
      }} >
      <div>
      <PickEpisode name="Episodes" changeID={setID} total={51}/>
     
      </div>
      <div>
      <EpisodeName name={name}  airDate={air_date} />
      <Card data={results} />
      </div>
      </div>
    </Layout>
  );
};

export default EpisodePage;
