import Layout from "@/components/layout/Layout";
import Card from "@/components/screens/characters/Card/Card";
import Filter from "@/components/screens/characters/Filter/Filter";
import Pagination from "@/components/screens/characters/Pagination/Pagination";
import Search from "@/components/screens/characters/Search/Search";
import NotFound from "@/components/screens/characters/NotFound/NotFound";
import Loader  from "../components/loading/Loading";
import  style from "../components/screens/characters/Characters.module.scss"

import { useState, useEffect } from "react";
import { NextPage } from "next";


const CharactersPage: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0},
    results: []
  });
  const { info, results } = fetchedData;

  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const api = `https://rickandmortyapi.com/api/character/?page=${pageIndex}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
      });
    }, 400);
  }, [api]);

  return (
    <Layout title="Characters">
      <div>
        <div className={style.search}>
          <Search
            setSearch={setSearch}
            setPageIndex={setPageIndex}
            search={search}
          />
        </div>
        <div className={style.div}>
        <Filter
          updateStatus={updateStatus}
          setGender ={updateGender}
          setSpecies={updateSpecies}
          setPageNumber={setPageIndex}
        />
        {loading ? (
          <div className={style.loader}><Loader/></div>
        ) : results == null ? (
         <NotFound/>
        ) : (
          <div >
            <Card data={results} />
            <Pagination
              pageIndex={pageIndex}
              info={info}
              setPageIndex={setPageIndex}
            />
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
};

export default CharactersPage;
