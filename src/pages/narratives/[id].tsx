import { useRouter } from "next/router";
import React from "react";
 
const Narratives = () => {
  const {query} = useRouter()
  console.log(query)
  return <div>narrative {query.id}</div>;
};

export default Narratives;
