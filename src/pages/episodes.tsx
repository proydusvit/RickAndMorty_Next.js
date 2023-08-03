import Loader  from "../components/loading/Loading";
import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import PickEpisode from "@/components/screens/episode/PickEpisode/PickEpisode";
import EpisodeName from "@/components/screens/episode/EpisodeName/EpisodeName";
import Card from "@/components/screens/characters/Card/Card";
import   { useState, useEffect } from "react";
import NotFound from  "@/components/screens/characters/NotFound/NotFound";
import  style from "../components/screens/characters/Characters.module.scss"

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
    setLoading(true);
  
    const timeout = setTimeout(async () => {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      setLoading(false);
      let a = await Promise.all(
        data.characters.map((x: RequestInfo | URL) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    }, 400); 
  
    return () => clearTimeout(timeout); 
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
   
      {loading ? (
          <div className={style.loader}><Loader/></div>
        ) : results == null ? (
         <NotFound/>
        ) : (
          <div >
            <Card data={results} />
          
          
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
};

export default EpisodePage;
