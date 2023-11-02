import React from "react";

import Header from "../../components/Header/Header";
import Start from "../../components/Home/Home";
import Popular from "../../components/Popular/Popular";
import Action from "../../components/Action/Action";
import Child from "../../components/Child/Child";
import Family from "../../components/Family/Family";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <Start />

      <Popular />

      <Action />

      <Child />

      <Family />

      <Footer />
    </div>
  );
};
export default Home;
