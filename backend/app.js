const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors());

const kadrovskaRouter = require("./router/kadrovska.router");
const sihtericaRouter = require("./router/sihterica.router");
const plateRouter = require("./router/plate.router");
// const registracijaRouter = require("./router/registracija.router");
// const loginRouter = require("./router/login.router");
const login_i_registracijaRouter = require("./router/login_i_registracija.router");

app.use(kadrovskaRouter);
app.use(sihtericaRouter);
app.use(plateRouter);
// app.use(registracijaRouter);
// app.use(loginRouter);
app.use(login_i_registracijaRouter);

app.listen(8081);
