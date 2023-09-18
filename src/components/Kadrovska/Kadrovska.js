import React, { useState } from "react";
import styles from "./Kadrovska.module.css";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";
import { Button } from "@mui/material";
import StickyHeadTable from "./Kadrovska_tabela/KadrovskaTabela";
import { AddModalKadrovska } from "../../AddModal/AddModal";

const Kadrovska = (props) => {
  const [kadrovskaModal, setKadrovskaModal] = useState(false);

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
            setKadrovskaModal(true);
          }}
        >
          DODAJ
        </Button>
      </div>
      <StickyHeadTable kadrovskaData={props.kadrovskaData} />
      {kadrovskaModal && (
        <AddModalKadrovska setKadrovskaModal={setKadrovskaModal} />
      )}
    </>
  );
};

export default Kadrovska;
