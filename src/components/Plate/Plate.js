import React, { useState } from "react";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import styles from "./Plate.module.css";
import { Button } from "@mui/material";
import StickyHeadTable from "./Plate_tabela/PlateTabela";
import { AddModalPlate } from "../../AddModal/AddModal";

const Plate = (props) => {
  const [plateModal, setPlateModal] = useState(false);

  return (
    <>
      <NavLinkComponent />
      <div className={styles.buttons}>
        <Button variant="contained" color="info">
          IZMJENA
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setPlateModal(true);
          }}
        >
          DODAJ
        </Button>
      </div>
      <StickyHeadTable plateData={props.plateData} />
      {plateModal && <AddModalPlate setPlateModal={setPlateModal} />}
    </>
  );
};

export default Plate;
