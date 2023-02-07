import React from "react";
import { Hero, UsefulLinks } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Retamozo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-center p-10">
        <h2 className="text-5xl py-2 font-medium"> Enzo Retamozo</h2>
        <h3 className="text-2xl py-2">
          frontend developer & attempting writer.
        </h3>
        <p className="text-md leading-8 text-gray-800"></p>
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <UsefulLinks />
      </section>
    </>
  );
}
