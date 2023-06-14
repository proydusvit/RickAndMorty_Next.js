import { useRouter } from "next/router";
import { getOnePost } from "@/services/services";
import { useEffect, useState } from "react";

export async function getStaticProps(context: any) {
  console.log(context);
  const post = await getOnePost(context.params.id);

  return {
    props: { post },
    revalidate: 10
  };
}

const CardDetails = ({ data = {} }) => {
  const { query, back } = useRouter();

  return (
    <div>
      <button type="button" onClick={back}>
        Click here to go back
      </button>

      <p>User: {query.name}</p>
    </div>
  );
};

export default CardDetails;
