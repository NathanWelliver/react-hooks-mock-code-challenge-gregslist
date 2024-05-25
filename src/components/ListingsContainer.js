import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {

function handleDeleteListing(deletedListing){
  const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
  setListings(updatedListings);
}

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            listing={listing}
            onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
