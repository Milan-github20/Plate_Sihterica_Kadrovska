import React from "react";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import styles from "./Plate.module.css";
import { Button } from "@mui/material";
import StickyHeadTable from "./Plate_tabela/PlateTabela";

const Plate = (props) => {
  return (
    <>
      <NavLinkComponent />
      <div className={styles.buttons}>
        <Button variant="outlined">IZMJENA</Button>
        <Button variant="outlined">DODAJ</Button>
      </div>
      <StickyHeadTable plateData={props.plateData} />
    </>
  );
};

export default Plate;
