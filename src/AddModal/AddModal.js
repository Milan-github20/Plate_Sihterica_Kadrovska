import React from "react";
import styles from "./AddModal.module.css";
import { Button } from "@mui/material";

export const AddModalSihterica = (props) => {
  return (
    <>
      <div className={styles.modal}>
        <div
          className={styles.overlay}
          onClick={() => {
            props.setSihtericaModal(false);
          }}
        ></div>
        <div className={styles.modal_content}>
          <div className={styles.header}>
            <h2>DODAJ U SIHTERICU</h2>
            <button
              className={styles.closeButton}
              onClick={() => {
                props.setSihtericaModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className={styles.unosDiv}>
            <input placeholder="Ime" />
            <input placeholder="Prezime" />
          </div>
          <div>
            <div className={styles.unosDiv}>
              <select>
                <option>Redovna (08-16h)</option>
                <option>Dodatna (poslije 16h)</option>
              </select>
            </div>
            <div className={styles.unosDiv}>
              <input placeholder="Radno vrijeme od" />
              <input placeholder="Radno vrijeme do" />
            </div>
            <div className={styles.unosDiv}>
              <input placeholder="Ukupno radno vrijeme" />
              <input placeholder="Dodatni rad" />
              <input placeholder="Ukupno sati" />
            </div>
            <div className={styles.unosDiv}>
              <input placeholder="Napomena" />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                props.setSihtericaModal(false);
              }}
              className={styles.otkazi}
            >
              OTKAŽI
            </Button>
            <Button
              variant="contained"
              color="success"
              className={styles.dodaj}
            >
              DODAJ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const AddModalPlate = (props) => {
  return (
    <>
      <div className={styles.modal}>
        <div
          className={styles.overlay}
          onClick={() => {
            props.setPlateModal(false);
          }}
        ></div>
        <div className={styles.modal_content}>
          <Button
            variant="outlined"
            onClick={() => {
              props.setPlateModal(false);
            }}
          >
            CLOSE
          </Button>
          <div>
            <input placeholder="ime" />
            <input placeholder="prezime" />
          </div>
          <div>
            <input placeholder="pozicija" />
            <input placeholder="plata" />
            <input placeholder="dodaci na platu" />
            <input placeholder="ukupna plata" />
            <input placeholder="datum isplate" />
            <input placeholder="status isplate" />
            <input placeholder="ostali podaci" />
          </div>
        </div>
      </div>
    </>
  );
};

export const AddModalKadrovska = (props) => {
  return (
    <>
      <div className={styles.modal}>
        <div
          className={styles.overlay}
          onClick={() => {
            props.setKadrovskaModal(false);
          }}
        ></div>
        <div className={styles.modal_content}>
          <Button
            variant="outlined"
            onClick={() => {
              props.setKadrovskaModal(false);
            }}
          >
            CLOSE
          </Button>
          <div>
            <input placeholder="ime" />
            <input placeholder="prezime" />
          </div>
          <div>
            <div>
              <input placeholder="datum rodjenja" />
              <input placeholder="jmbg" />
            </div>
            <input placeholder="broj telefona" />
            <input placeholder="radno mjesto zaposlenog" />
            <input placeholder="vrsta ugovora" />
            <input placeholder="radno vrijeme" />
            <input placeholder="zavrsena skola" />
            <input placeholder="radni staz" />
            <input placeholder="plata" />
            <input placeholder="bankovni racun" />
            <input placeholder="ugovor" />
          </div>
        </div>
      </div>
    </>
  );
};
