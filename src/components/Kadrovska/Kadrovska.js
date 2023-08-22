import React from "react";
import styles from "./Kadrovska.module.css";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import { Button } from "@mui/material";
import StickyHeadTable from "./Kadrovska_tabela/KadrovskaTabela";

const Kadrovska = () => {
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

export default Kadrovska;