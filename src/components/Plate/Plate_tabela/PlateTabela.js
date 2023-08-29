import React, { useState, useEffect } from "react";
import styles from "./PlateTabela.module.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { format } from "date-fns";

const PlateTabela = (props) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const trasnsformedData = props.plateData.map((item) => ({
      id: item.id,
      ime: item.ime,
      prezime: item.prezime,
      pozicija: item.pozicija,
      plata: item.plata,
      DodaciNaPlatu: item.dodaci_na_platu,
      UkupnaPlata: item.ukupna_plata,
      DatumIsplate: format(new Date(item.datum_isplate), "dd-MM-yyyy"),
      StatusIsplate: item.status_isplate,
      OstaliPodaci: item.ostali_podaci,
    }));
    console.log();
    setRowData(trasnsformedData);
  }, [props.plateData]);

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
