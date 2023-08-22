import React from "react";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import styles from "./Sihterica.module.css";
import { Button } from "@mui/material";
import StickyHeadTable from "./Sihterica_tabela/SihtericaTabela";

const Sihterica = () => {
  return (
    <>
      <NavLinkComponent />
      <div className={styles.buttons}>
        <Button variant="outlined">IZMJENA</Button>
        <Button variant="outlined">DODAJ</Button>
      </div>
      <StickyHeadTable />
    </>
  );
};

export default Sihterica;
