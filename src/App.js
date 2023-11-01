import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/HomePage";
import Popular from "./components/Popular/Popular";
import Action from "./components/Action/Action";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/action" element={<Action />} />
      </Routes>
    </div>
  );
}

export default App;
