import React from "react";
import { toKebabCase, toCamelCase } from "../../utils";
import PropTypes from "prop-types";

export const Table = ({ headers, rows, setButtons }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={toKebabCase(header)}>{header}</th>
          ))}
          {!!setButtons && <th />}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, index) => (
          <tr key={index}>
            {
              headers.map((header) => (
                <td key={toKebabCase(header)}>{item[toCamelCase(header)]}</td>
              ))
            }
            {!!setButtons && <td>{setButtons(item)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.array.isRequired,
  setButtons: PropTypes.func,
};
