import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavLinkComponent.module.css";

const NavLinkComponent = () => {
  const location = useLocation();

  return (
    <div className={styles.mainDiv}>
      <NavLink to="/">
        <div className={styles.home}>
          <img src="./assets/home.png" alt="home" />
          <p>POČETNA</p>
        </div>
      </NavLink>
      <NavLink
        to="/sihterica"
        className={
          location.pathname === "/sihterica" ? styles.activeNavLink : ""
        }
      >
        <div className={styles.sihterica}>
          <img src="./assets/document.png" alt="sihterica" />
          <p>ŠIHTERICA</p>
        </div>
      </NavLink>

      <NavLink
        to="/plate"
        className={location.pathname === "/plate" ? styles.activeNavLink : ""}
      >
        <div className={styles.plate}>
          <img src="./assets/money-bag.png" alt="plate" />
          <p>PLATE</p>
        </div>
      </NavLink>
      <NavLink
        to="/kadrovska"
        className={
          location.pathname === "/kadrovska" ? styles.activeNavLink : ""
        }
      >
        <div className={styles.kadrovska}>
          <img src="./assets/human-resources.png" alt="kadrovska" />
          <p>KADROVSKA</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinkComponent;
