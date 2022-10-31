import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IDE } from "./components/IDE";

function App() {
  return (
    <div className="App">
      <Header />
      <IDE />
      <Footer />
    </div>
  );
}

export default App;
