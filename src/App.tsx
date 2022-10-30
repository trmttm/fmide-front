import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { IDE } from "./IDE";

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
