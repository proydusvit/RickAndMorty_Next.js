import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

const NotFound: NextPage = () => {
  return (
    <Layout title="Not Found">
      <div style={{ textAlign: "center" }}>
        <Image src="/foto404.webp" alt="404" width={450} height={450} />
      </div>
    </Layout>
  );
};

export default NotFound;
