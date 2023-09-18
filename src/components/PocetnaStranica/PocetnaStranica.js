import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const PocetnaStranica = () => {
  // const korisnickoIme = localStorage.getItem("accessToken");
  // console.log(korisnickoIme);

  // const korisnickoIme = Cookies.get("accessToken");
  return (
    <>
      <h1>
        Dobrodosli,
        {/* {korisnickoIme
          .split(".")
          .join(" ")
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")} */}
      </h1>
    </>
  );
};

export default PocetnaStranica;
