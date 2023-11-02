import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import Popular from "./components/Popular/Popular";
import Action from "./components/Action/Action";
import Child from "./components/Child/Child";
import Family from "./components/Family/Family";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/action" element={<Action />} />
        <Route exact path="/child" element={<Child />} />
        <Route exact path="/family" element={<Family />} />
      </Routes>
    </div>
  );
}

export default App;
