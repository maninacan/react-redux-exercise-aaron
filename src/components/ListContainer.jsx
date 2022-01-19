import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  selectItem,
  deselectItem,
} from "../ducks/groceries";

import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

export const ListContainer = (props) => {
  const headers = ["Id", "Name", "Category", "Delivery Method"];

  const listSelectionData = {
    headers,
    list: [props.selectedItem],
  };

  const listTableData = {
    headers,
    list: props.groceryList,
  };

  return (
    <section className="groceryApp">
      <div className="listInputs">
        <ListInputs addItem={props.addItem} />
      </div>
      <div className="types">
        <ListSelection listSelectionData={listSelectionData} />
        <ListTable
          listTableData={listTableData}
          removeItem={props.removeItem}
          selectItem={props.selectItem}
          deselectItem={props.deselectItem}
        />
      </div>
    </section>
  );
};

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const mapStateToProps = ({
  groceries: { list: groceryList, selectedItem, isItemSelected },
}) => ({
  groceryList,
  selectedItem,
  isItemSelected,
});

const mapDispatchToProps = {
  addItem,
  removeItem,
  selectItem,
  deselectItem,
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
