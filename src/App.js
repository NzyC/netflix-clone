import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
