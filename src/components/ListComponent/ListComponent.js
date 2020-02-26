import React from "react";
import ListItem from "../ListItem/ListItem.js";

function ListComponent({ listArray }) {
  return (
    <ul>
      {listArray.map(item => (
        <ListItem theItem={item} key={item} />
      ))}
    </ul>
  );
}

export default ListComponent;
