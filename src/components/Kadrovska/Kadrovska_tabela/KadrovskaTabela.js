import React, { useState, useEffect } from "react";
import styles from "./KadrovskaTabela.module.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { format } from "date-fns";

const KadrovskaTabela = (props) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const trasnsformedData = props.kadrovskaData.map((item) => ({
      ime: item.ime,
      prezime: item.prezime,
      datumRođenja: format(new Date(item.datum_rodjenja), "dd-MM-yyyy"),
      jmbg: item.jmbg,
      BrojTelefona: item.broj_telefona,
      RadnoMjestoZaposlenog: item.radno_mjesto_zaposlenog,
      VrstaUgovora: item.vrsta_ugovora,
      RadnoVrijeme: item.radno_vrijeme,
      ZavrsenaSkola: item.zavrsena_skola,
      RadniStaz: item.radni_staz,
      Plata: item.plata,
      BankovniRacun: item.bankovni_racun,
      Ugovor: item.ugovor,
    }));
    setRowData(trasnsformedData);
  }, [props.kadrovskaData]);

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
