import React from "react";

function Search({setSearchQuery, searchQuery}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch(event){
    setSearchQuery(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
