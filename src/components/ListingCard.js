import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavorite(){
    setIsFavorited((prevFavorite) => !prevFavorite);
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
      <button
        className={`emoji-button favorite ${isFavorited ? 'active' : ''}`}
        onClick={handleFavorite}
      >
        {isFavorited ? '★' : '☆'}
      </button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
