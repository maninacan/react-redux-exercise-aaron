import React from "react";
import PropTypes from "prop-types";
import { Table } from "./common/Table";

export const ListTable = (props) => {
  return (
    <div className="listTable">
      <Table
        headers={props.listTableData.headers}
        rows={props.listTableData.list}
        setButtons={(item) => (
          <>
            <button type="button" onClick={() => props.removeItem(item.id)}>
              Remove
            </button>
            <button type="button" onClick={() => props.selectItem(item)}>
              Select
            </button>
            <button type="button" onClick={() => props.deselectItem(item.id)}>
              Deselect
            </button>
          </>
        )}
      />
    </div>
  );
};

export default ListTable;

ListTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  listTableData: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        deliveryMethod: PropTypes.oneOf(["Air", "Ground"]),
      })
    ).isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
