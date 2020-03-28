import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Tailwind from "./components/button";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Tailwind />
      <h1>Tailwind Practice</h1>
    </div>
  );
}
