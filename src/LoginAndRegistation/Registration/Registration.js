import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./RegistrationValidation";
import axios from "axios";
import styles from "./Registration.module.css";

const Registration = () => {
  const [values, setValues] = useState({
    ime: "",
    email: "",
    sifra: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validation(values);
    setErrors(err);
    if (err.ime === "" && err.email === "" && err.sifra === "") {
      axios
        .post("http://localhost:8081/novi_korisnik", values)
        .then((res) => {
          alert("Uspjesno ste se registrovali");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Registracija</h3>

        <div className={styles.ime}>
          <label className={styles.label}>Korisničko ime</label>
          <input
            className={styles.inputField}
            placeholder="Korisničko ime"
            type="ime"
            name="ime"
            onChange={handleInput}
          />
          {errors.ime && <span className={styles.span}>{errors.ime}</span>}
        </div>

        <div className={styles.email}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputField}
            placeholder="Email"
            type="email"
            onChange={handleInput}
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
            onChange={handleInput}
            name="sifra"
          />
          {errors.sifra && <span className={styles.span}>{errors.sifra}</span>}
        </div>

        <div className={styles.buttonDiv}>
          <button type="submit">Registrujte se</button>
        </div>
        <div className={styles.link}>
          Imate nalog? <Link to="/">Prijavite se!</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
