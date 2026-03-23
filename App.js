import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <ContentA />
        <ContentB />
      </main>

      <Footer />
    </div>
  );
}

export default App;
