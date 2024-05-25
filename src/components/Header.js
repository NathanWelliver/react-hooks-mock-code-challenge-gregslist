import React from "react";
import Search from "./Search";

function Header({setSearchQuery, searchQuery}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
    </header>
  );
}

export default Header;
