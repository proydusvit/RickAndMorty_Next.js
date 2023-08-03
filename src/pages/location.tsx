import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import LocationInfo  from "../components/screens/location/LocationInfo/LocationInfo"
import   { useState, useEffect } from "react";
import Card from "@/components/screens/characters/Card/Card";
import PickLocation from "../components/screens/location/PickLocation/PickLocation"
import NotFound from  "@/components/screens/characters/NotFound/NotFound";
import Loader  from "../components/loading/Loading";
import  style from "../components/screens/characters/Characters.module.scss"

 type LocationInfoProps = {
  dimension: string
  name: string
  residents:any
}

const Location: NextPage  = () => {

  const [loading, setLoading] = useState(true);
  let [number, setNumber] = useState(1);
  let [results, setResults] =  useState([] as any[]);
  const [info, setInfo] = useState<LocationInfoProps>({
    dimension: '',
    name: '',
    residents: []
  });
  const { dimension, name } = info
  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    setLoading(true);
  
    const timeout = setTimeout(() => {
   
      const fetchData = async () => {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);
        setLoading(false);
        let a = await Promise.all(
          data.residents.map((x: RequestInfo | URL) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(a);
      };
      fetchData();
    }, 400); // Затримка у 2000 мілісекунд (2 секунди)
  
    return () => clearTimeout(timeout); // Очищення таймауту при зміні залежностей
  }, [api]);

  return (
    <Layout title="Location">
    <div style={{
         display:"flex",
         justifyContent:"space-around"
        }}>
      <div>
        <PickLocation name="Location" changeID={setNumber} total={126}/>
      </div>
      <div>
        <LocationInfo name={name} dimension={dimension}/>
        {loading || info.residents.length === 0 ? (
          <div>
            {loading ? (
              <div className={style.loader}><Loader/></div>
            ) : (
              <NotFound/>
            )}
          </div>
        ) : (
          <div>
            <Card data={results} />
          </div>
        )}
      </div>
    </div>
  </Layout>
  )
}

export default Location;