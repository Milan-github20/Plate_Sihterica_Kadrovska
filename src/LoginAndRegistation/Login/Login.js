import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import styles from "./Login.module.css";
// import { Cookies } from "react-cookie";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [sifra, setSifra] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  // const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validation(email, sifra);
    setErrors(err);

    if (err.email === "" && err.sifra === "") {
      const response = await fetch("http://localhost:8081/prijava", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, sifra }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const accessToken = data.accessToken;
        // const accessTokenSifra = data.accessToken;
        alert("Uspjesno ste se prijavili!");
        // navigate(`/pocetna_stranica`);
        localStorage.setItem(
          "accessToken",
          accessToken,
          Cookies.set("accessToken", accessToken)
          // Cookies.set("accessTokenSifra", accessTokenSifra)
        );
      } else {
        alert("Podaci email ili sifra nisu ispravni");
      }
    }
  };

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Prijava</h3>

        <div className={styles.email}>
          <label className={styles.label}>
            <strong>Email</strong>
          </label>
          <input
            className={styles.inputField}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          {errors.email && <span className={styles.span}>{errors.email}</span>}
        </div>

        <div className={styles.sifra}>
          <label className={styles.label}>Šifra</label>
          <input
            className={styles.inputField}
            placeholder="Šifra"
            type="password"
            onChange={(e) => setSifra(e.target.value)}
            name="sifra"
          />
          {errors.sifra && <span className={styles.span}>{errors.sifra}</span>}
        </div>

        <div className={styles.buttonDiv}>
          <button onClick={handleSubmit}>Prijavite se</button>
        </div>
        <div className={styles.link}>
          Nemate nalog? <Link to="/registracija">Registrujte se!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
