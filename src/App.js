import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Kadrovska from "./components/Kadrovska/Kadrovska";
import Plate from "./components/Plate/Plate";
import Sihterica from "./components/Sihterica/Sihterica";
import NavComponent from "./components/Navcomponent/Nav_Component";
import axios from "axios";
import Login from "./LoginAndRegistation/Login/Login";
import Registration from "./LoginAndRegistation/Registration/Registration";
import PocetnaStranica from "./components/PocetnaStranica/PocetnaStranica";

function App() {
  const [sihtericaData, setSihtericaData] = useState([]);
  const [plateData, setPlateData] = useState([]);
  const [kadrovskaData, setKadrovskaData] = useState([]);

  // const fetchSihterica = () => {
  //   axios.get("http://localhost:8081/prikazi_sihtericu").then((res) => {
  //     setSihtericaData(res.data);
  //   });
  // };

  // const fetchPlate = () => {
  //   axios.get("http://localhost:8081/prikazi_plate").then((res) => {
  //     setPlateData(res.data);
  //   });
  // };

  // const fetchKadrovska = () => {
  //   axios.get("http://localhost:8081/prikazi_kadrovsku").then((res) => {
  //     setKadrovskaData(res.data);
  //   });
  // };

  // useEffect(() => {
  //   fetchSihterica();
  //   fetchPlate();
  //   fetchKadrovska();
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registracija" element={<Registration />} />
        <Route path="/pocetna_stranica" element={<PocetnaStranica />} />
        <Route path="/NavComponent" element={<NavComponent />} />
        {/* <Route
          path="/kadrovska"
          element={<Kadrovska kadrovskaData={kadrovskaData} />}
        />
        <Route path="/plate" element={<Plate plateData={plateData} />} />
        <Route
          path="/sihterica"
          element={<Sihterica sihtericaData={sihtericaData} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
