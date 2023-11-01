import React from "react";

/* Komponente */
import Header from "../../components/Header/Header";
import Start from "../../components/Home/Home";
import Popular from "../../components/Popular/Popular";
import Action from "../../components/Action/Action";

const Home = () => {
  return (
    <div>
      <Header />

      <Start />

      <Popular />

      <Action />
    </div>
  );
};
export default Home;
