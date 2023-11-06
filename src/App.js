import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home/HomePage";
import Popular from "./components/Popular/Popular";
import Action from "./components/Action/Action";
import Child from "./components/Child/Child";
import Family from "./components/Family/Family";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="ring"></div>
          <span className="span">
            <span>Ani</span>Lix.
          </span>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/popular" element={<Popular />} />
            <Route exact path="/action" element={<Action />} />
            <Route exact path="/child" element={<Child />} />
            <Route exact path="/family" element={<Family />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
