import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav_component.module.css";

const NavComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.centeredDivs}>
        <NavLink to="/sihterica">
          <div className={styles.sihterica}>
            <img src="./assets/document.png" alt="sihterica" />
            <h2>ŠIHTERICA</h2>
          </div>
        </NavLink>

        <NavLink to="/plate">
          <div className={styles.plate}>
            <img src="./assets/money-bag.png" alt="plate" />
            <h2>PLATE</h2>
          </div>
        </NavLink>
      </div>
      <div className={styles.centeredDivs}>
        <NavLink to="/kadrovska">
          <div className={styles.kadrovska}>
            <img src="./assets/human-resources.png" alt="kadrovska" />
            <h2>KADROVSKA</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavComponent;
