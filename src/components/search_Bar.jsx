import React from "react";

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.search(event.target.value);
  };

  return (
    <input type="text" className="form-control form-search" onChange={handleChange} />
  );
};

export default SearchBar;
