import React from "react";
import styles from "./PlateTabela.module.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const PlateTabela = () => {
  const rowData = [
    {
      id: 1,
      ime: "Aleksandar",
      prezime: "Jagodic",
      pozicija: "Frontend developer",
      plata: 100,
      DodaciNaPlatu: 0,
      UkupnaPlata: 100,
      DatumIsplate: "01.10.2022",
      StatusIsplate: "isplaceno",
      OstaliPodaci: "/",
    },
    {
      id: 2,
      ime: "Aleksandar",
      prezime: "Jagodic",
      pozicija: "Frontend developer",
      plata: 100,
      DodaciNaPlatu: 0,
      UkupnaPlata: 100,
      DatumIsplate: "01.10.2022",
      StatusIsplate: "isplaceno",
      OstaliPodaci: "/",
    },
    {
      id: 3,
      ime: "Aleksandar",
      prezime: "Jagodic",
      pozicija: "Frontend developer",
      plata: 100,
      DodaciNaPlatu: 0,
      UkupnaPlata: 100,
      DatumIsplate: "01.10.2022",
      StatusIsplate: "isplaceno",
      OstaliPodaci: "/",
    },
  ];

  const columnDefs = [
    {
      field: "id",
      tooltipField: "id",
      sortable: true,
      width: 100,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "ime",
      tooltipField: "ime",
      sortable: true,
      width: 180,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "prezime",
      tooltipField: "prezime",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "pozicija",
      tooltipField: "pozicija",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "plata",
      tooltipField: "plata",
      sortable: true,
      width: 170,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "DodaciNaPlatu",
      tooltipField: "DodaciNaPlatu",
      sortable: true,
      width: 180,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "UkupnaPlata",
      tooltipField: "UkupnaPlata",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "DatumIsplate",
      tooltipField: "DatumIsplate",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "StatusIsplate",
      tooltipField: "StatusIsplate",
      sortable: true,
      width: 180,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "OstaliPodaci",
      tooltipField: "OstaliPodaci",
      sortable: true,
      width: 200,
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

export default PlateTabela;
