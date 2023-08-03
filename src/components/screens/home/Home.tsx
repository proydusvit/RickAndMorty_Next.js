import Image from "next/image";
import Layout from "@/components/layout/Layout";
import homeImg from "@/image/home.png";
import { NextPage } from "next";
import style from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className={style.box}>
        <Image src={homeImg} alt="Home" width={800} height={650} />
      </div>
    </Layout>
  );
};
export default Home;
