import "./App.css"; // Importiere die Styles für die App

import React, { useEffect, useState } from "react"; // Importiere React und einige Helfer aus React, z.B. useEffect und useState

import { Route, Routes } from "react-router-dom"; // Importiere Route und Routes aus react-router-dom für die Seiten-Routing-Funktionalität

/*Pages*/
import Home from "./pages/Home/HomePage"; // Importiere die Home-Seite
import About from "./pages/About/AboutPage"; // Importiere die About-Seite
import Project from "./pages/Project/ProjectPage"; // Importiere die Project-Seite

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"; // Importiere die RouterScrollTop-Komponente für das Zurückscrollen

function App() {
  const [loading, setLoading] = useState(false); // Verwende den useState-Hook, um den Ladezustand der Anwendung zu verwalten

  useEffect(() => {
    setLoading(true); // Setze den Ladezustand auf true, um den Ladebildschirm anzuzeigen

    // Simuliere einen Ladevorgang, der nach 4 Sekunden beendet wird
    setTimeout(() => {
      setLoading(false); // Setze den Ladezustand auf false, um die Hauptinhalte anzuzeigen
    }, 4000);
  }, []);

  return (
    <>
      <RouterScrollTop />{" "}
      {/* Rendere die RouterScrollTop-Komponente für das Zurückscrollen */}
      {loading ? ( // Wenn die Anwendung noch lädt, zeige den Ladebildschirm an
        <div className="loading">
          <div className="loader">
            <span>MC Lovin 1337</span>
            <span>MC Lovin 1337</span>
          </div>
        </div>
      ) : (
        <Routes>
          {/* Sobald das Laden abgeschlossen ist, zeige die Hauptinhalte an */}
          <Route path="/" element={<Home />} />{" "}
          {/* Definiere Routen und weise ihnen die entsprechenden Komponenten zu */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      )}
    </>
  );
}

export default App; // Exportiere die App-Komponente, um sie in anderen Teilen deiner Anwendung verwenden zu können
