import React from "react";

const SearchField = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchField;
