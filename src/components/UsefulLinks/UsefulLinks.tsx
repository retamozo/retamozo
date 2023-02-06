import Link from "next/link";
import React from "react";

const UsefulLinks = () => {
  return (
    <ul>
      <li>
        <Link href={"/about-me"}>About me</Link>
      </li>
      <li>
        <Link href={"/articles"}>Articles</Link>
      </li>
      <li>
        <Link href={"/articles"}> Narratives (non tech)</Link>
      </li>
    </ul>
  );
};

export default UsefulLinks;
