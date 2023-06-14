import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import LocationInfo  from "../components/screens/location/LocationInfo/LocationInfo"
import   { useState, useEffect } from "react";
import Card from "@/components/screens/characters/Card/Card";
import PickLocation from "../components/screens/location/PickLocation/PickLocation"

 type LocationInfoProps = {
  dimension: string
  name: string
}

const Location: NextPage  = () => {
  
  let [number, setNumber] = useState(1);
  let [results, setResults] =  useState([] as any[]);
  const [info, setInfo] = useState<LocationInfoProps>({
    dimension: '',
    name: ''
  });
  const { dimension, name } = info
  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x: RequestInfo | URL) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <Layout title="Location">
  <div style={{
       display:"flex",
       justifyContent:"space-around"
      }} >
      <div>
      <PickLocation name="Location" changeID={setNumber} total={126}/>
    
    </div>
    <div>

    <LocationInfo name={name}   dimension={ dimension}/>
    <Card data={results}/>
    </div>
    </div>
    </Layout>
  )
}

export default Location;