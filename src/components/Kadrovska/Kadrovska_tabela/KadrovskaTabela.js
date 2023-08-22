import React from "react";
import styles from "./KadrovskaTabela.module.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const KadrovskaTabela = () => {
  const rowData = [
    {
      ime: "Milan",
      prezime: "Jagodic",
      datumRođenja: "20/02/2002",
      jmbg: 2002002100045,
      BrojTelefona: "066/305-535",
      RadnoMjestoZaposlenog: "Frontend developer",
      VrstaUgovora: "Na odredjeno",
      RadnoVrijeme: "Rad od kuce",
      ZavrsenaSkola: "Ekonomska skola",
      RadniStaz: "1.5 godina",
      Plata: "/",
      BankovniRacun: 55515184515155,
      Ugovor: "Slika ugovora ili skeniran ugovor",
    },
    {
      ime: "Milan",
      prezime: "Jagodic",
      datumRođenja: "20/02/2002",
      jmbg: 2002002100045,
      BrojTelefona: "066/305-535",
      RadnoMjestoZaposlenog: "Frontend developer",
      VrstaUgovora: "Na odredjeno",
      RadnoVrijeme: "Rad od kuce",
      ZavrsenaSkola: "Ekonomska skola",
      RadniStaz: "1.5 godina",
      Plata: "/",
      BankovniRacun: 55515184515155,
      Ugovor: "Slika ugovora ili skeniran ugovor",
    },
    {
      ime: "Aleksandar",
      prezime: "Jagodic",
      datumRođenja: "20/02/2002",
      jmbg: 2002002100045,
      BrojTelefona: "066/305-535",
      RadnoMjestoZaposlenog: "Frontend developer",
      VrstaUgovora: "Na odredjeno",
      RadnoVrijeme: "Rad od kuce",
      ZavrsenaSkola: "Ekonomska skola",
      RadniStaz: "1.5 godina",
      Plata: "/",
      BankovniRacun: 55515184515155,
      Ugovor: "Slika ugovora ili skeniran ugovor",
    },
  ];

  const columnDefs = [
    {
      field: "ime",
      tooltipField: "ime",
      sortable: true,
      width: 120,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "prezime",
      tooltipField: "prezime",
      sortable: true,
      width: 130,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "datumRođenja",
      tooltipField: "datumRođenja",
      sortable: true,
      width: 140,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "jmbg",
      tooltipField: "jmbg",
      sortable: true,
      width: 140,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "BrojTelefona",
      tooltipField: "BrojTelefona",
      sortable: true,
      width: 120,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "RadnoMjestoZaposlenog",
      tooltipField: "RadnoMjestoZaposlenog",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "VrstaUgovora",
      tooltipField: "VrstaUgovora",
      sortable: true,
      width: 140,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "RadnoVrijeme",
      tooltipField: "RadnoVrijeme",
      sortable: true,
      width: 130,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "ZavrsenaSkola",
      tooltipField: "ZavrsenaSkola",
      sortable: true,
      width: 150,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "RadniStaz",
      tooltipField: "RadniStaz",
      sortable: true,
      width: 110,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Plata",
      tooltipField: "Plata",
      sortable: true,
      width: 120,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "BankovniRacun",
      tooltipField: "BankovniRacun",
      sortable: true,
      width: 150,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Ugovor",
      tooltipField: "Ugovor",
      sortable: true,
      width: 160,
      filter: true,
      floatingFilter: true,
    },
  ];

  const selektovaniRed = "multiple";
  const onSelectionChanged = (e) => {
    console.log(e.api.getSelectedRows());
  };

  return (
    <div className={`ag-theme-alpine ${styles.container}`}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        rowSelection={selektovaniRed}
        onSelectionChanged={onSelectionChanged}
        rowMultiSelectWithClick={true}
        enableBrowserTooltips={true}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default KadrovskaTabela;
