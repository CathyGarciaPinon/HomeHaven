import { Link } from "react-router-dom";

export default function ListingItemPage({ listings, handleDelete }) {



  return (
      <>
      <h1>All Current Listings</h1>
      { listings.length ?
        listings.map((l, idx) => 
          <div className="ListingItem" key={idx}>
              <Link to={`/details/${l._id}`}>
                <span>{l.photo && <img src={l.photo} alt="image" />}</span>
                &nbsp;  &nbsp;
                <span>{l.price}</span>
                &nbsp;  &nbsp;
                <span>{l.location}</span>
              </Link>
              
          </div>)         
      :
      <h3>Check back for new listings!</h3>
      }
      </>
  );
}