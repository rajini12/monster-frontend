import React from "react";

import "./search-box.styles.css"

const SearchBox = ({placeholder, onSearchChange}) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;