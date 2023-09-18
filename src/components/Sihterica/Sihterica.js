import React, { useState } from "react";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import styles from "./Sihterica.module.css";
import { Button } from "@mui/material";
import StickyHeadTable from "./Sihterica_tabela/SihtericaTabela";
import { AddModalSihterica } from "../../AddModal/AddModal";

const Sihterica = (props) => {
  const [sihtericaModal, setSihtericaModal] = useState(false);

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
            setSihtericaModal(true);
          }}
        >
          DODAJ
        </Button>
      </div>
      <StickyHeadTable sihtericaData={props.sihtericaData} />
      {sihtericaModal && (
        <AddModalSihterica setSihtericaModal={setSihtericaModal} />
      )}
    </>
  );
};

export default Sihterica;
