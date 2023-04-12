import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <input onChange={props.searchHandler} />
  );
};

export default Search;