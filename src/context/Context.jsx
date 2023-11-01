import React, { useState } from "react";
import DeutschNachrichten from "./../language/de.json"; // Stelle sicher, dass der Dateipfad korrekt ist
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const standardsprache = "de-DE"; // Setze die Standardsprache auf Deutsch
  const standardNachrichten = DeutschNachrichten; // Nachrichten aus der JSON-Datei

  const [nachricht, setNachricht] = useState(standardNachrichten);
  const [sprache, setSprache] = useState(standardsprache);

  return (
    <langContext.Provider value={{ sprache, nachricht }}>
      <IntlProvider locale={sprache} messages={nachricht}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
