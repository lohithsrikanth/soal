import React from "react";

const ListGroup = (props) => {
  const {
    items,
    selectedItem,
    onItemSelect,
    textProperty,
    valueProperty,
  } = props;

  return (
    <React.Fragment>
      <ul className="list-group" style={{ width: "70%" }}>
        {items.map((cohort) => (
          <li
            className={
              cohort === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            key={cohort[valueProperty]}
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => onItemSelect(cohort)}
          >
            {cohort[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
