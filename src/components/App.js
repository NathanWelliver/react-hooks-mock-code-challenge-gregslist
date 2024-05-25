import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((r) => r.json())
  .then((listings) => {
    setListings(listings)
  })
}, []);

const filterdListings = listings.filter((listing) => 
  listing.description.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <ListingsContainer 
        listings={filterdListings}
        setListings={setListings}
      />
    </div>
  );
}

export default App;
