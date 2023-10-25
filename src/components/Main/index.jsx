import React from "react";

/* Componet */
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Main = () => (
  <main>
    <About />
    {/* Eingefügte About-Komponente für Informationen über die Person oder das Unternehmen. */}
    <Project />
    {/* Eingefügte Project-Komponente für die Darstellung von Projekten oder Arbeiten. */}
    <Contact />
    {/* Eingefügte Contact-Komponente für Kontaktinformationen und Kontaktmöglichkeiten. */}
  </main>
);

export default Main;
