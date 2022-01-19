import React from "react";
import Table from "./common/Table";

const ListSelection = (props) => (
  <div className="listSelection">
    <Table
      headers={props.listSelectionData.headers}
      rows={props.listSelectionData.list}
    />
  </div>
);

export default ListSelection;
