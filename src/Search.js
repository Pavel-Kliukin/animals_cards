import React from 'react';

const Search = (props) => {
  return (
    <input onChange={props.searchHandler} />
  );
};

export default Search;