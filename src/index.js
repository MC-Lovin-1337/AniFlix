import React from "react"; // Importiere React-Bibliothek, um React-Funktionen und Komponenten zu verwenden
import ReactDOM from "react-dom/client"; // Importiere ReactDOM, um React-Komponenten im HTML-Dokument zu rendern
import App from "./App"; // Importiere die Haupt-App-Komponente aus "./App"
import { LangProvider } from "./context/Context"; // Importiere die "LangProvider" -Komponente aus dem Kontext
import { HashRouter } from "react-router-dom"; // Importiere die HashRouter-Komponente aus der react-router-dom-Bibliothek

// Verwende ReactDOM.createRoot, um eine neue React-Root zu erstellen und diese an das HTML-Element mit der ID "root" zu binden
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render die Hauptanwendungskomponente innerhalb von React.StrictMode, LangProvider und HashRouter

// Verwende HashRouter, um die Router-Funktionalität in deiner Anwendung zu aktivieren
// Verwende den Language Provider, um die Sprachinformationen in der gesamten Anwendung bereitzustellen
// Verwende React.StrictMode, um potenzielle Probleme und Warnungen während der Entwicklung anzuzeigen
// Rende die Haupt-App-Komponente

root.render(
  <HashRouter>
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </HashRouter>
);
