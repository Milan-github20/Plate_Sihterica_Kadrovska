import React, { useEffect, useState } from "react";
import styles from "./SihtericaTabela.module.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const SihtericaTabela = (props) => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const trasnsformedData = props.sihtericaData.map((item) => ({
      id: item.id,
      ime: item.ime,
      prezime: item.prezime,
      tipSmjene: item.tip_smjene,
      RadnoVrijemeOd: item.radno_vrijeme_od,
      RadnoVrijemeDo: item.radno_vrijeme_do,
      UkupnoRadnoVrijeme: item.ukupno_radno_vrijeme,
      DodatniRad: item.dodatni_rad,
      UkupnoSati: item.ukupno_sati,
      Napomena: item.napomena,
    }));
    setRowData(trasnsformedData);
  }, [props.sihtericaData]);

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
      field: "tipSmjene",
      tooltipField: "tipSmjene",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "RadnoVrijemeOd",
      tooltipField: "RadnoVrijemeOd",
      sortable: true,
      width: 170,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "RadnoVrijemeDo",
      tooltipField: "RadnoVrijemeDo",
      sortable: true,
      width: 180,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "UkupnoRadnoVrijeme",
      tooltipField: "UkupnoRadnoVrijeme",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "DodatniRad",
      tooltipField: "DodatniRad",
      sortable: true,
      width: 200,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "UkupnoSati",
      tooltipField: "UkupnoSati",
      sortable: true,
      width: 180,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "Napomena",
      tooltipField: "Napomena",
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

export default SihtericaTabela;
