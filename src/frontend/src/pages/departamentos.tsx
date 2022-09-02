import type { NextPage } from "next";
import { Meta } from "../templates/meta";
import { Template } from "../templates/template";
import DataTable from "react-data-table-component";
import { useState } from "react";

const paginationComponentOptions = {
  rowsPerPageText: "Departamentos por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const columns = [
  {
    id: "title",
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    id: "title",
    name: "year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const Home: NextPage = () => {
  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  };

  return (
    <Template
      meta={
        <Meta
          title="Sistema Escolar"
          description="Administre suas funcionalidades"
          image="/img/banner/logo.png"
          imageAlt="Sistema Escolar"
        />
      }
    >
      <div className="container py-16">
        <h2 className="text-gray-700">Departamentos</h2>

        <div className="mt-8 overflow-x-auto animate-fade-in-up text-gray-700">
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            onSelectedRowsChange={handleChange}
            clearSelectedRows={toggledClearRows}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </Template>
  );
};

export default Home;
