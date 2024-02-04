"use client";

import { Providers } from "@/util/apolloClient";
import "../styles/global.scss"
import Landing from "./Components/templates/Landing";

const Home = () => {
  return (
    <>
      <Providers>
       <Landing/>
      </Providers>
    </>
  );
};

export default Home;
