import { Link } from "react-router-dom";
import "./ListingItemPage.css";

export default function ListingItemPage({ listings, handleDelete }) {



  return (
      <>
      <h1>All Current Listings</h1>
      <div className="Listings">
      { listings.length ?
        listings.map((l, idx) => 
          <div className="ListingItem" key={idx}>
              <Link to={`/listings/${l._id}`}>
                <p>{l.photo && <img src={l.photo} alt="image" />}</p>
                <p>{l.price}</p>
                <p>{l.location}</p>
              </Link>
              
          </div>)         
      :
      <h3>Check back for new listings!</h3>
      }
      </div>
      </>
  );
}