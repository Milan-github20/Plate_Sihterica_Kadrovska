import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Kadrovska from "./components/Kadrovska/Kadrovska";
import Plate from "./components/Plate/Plate";
import Sihterica from "./components/Sihterica/Sihterica";
import NavComponent from "./components/Navcomponent/Nav_Component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavComponent />} />
        <Route path="/kadrovska" element={<Kadrovska />} />
        <Route path="/plate" element={<Plate />} />
        <Route path="/sihterica" element={<Sihterica />} />
      </Routes>
    </>
  );
}

export default App;
