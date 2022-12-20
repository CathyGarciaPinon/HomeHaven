import { Link } from "react-router-dom";

export default function ListingItemPage({ listings, handleDelete }) {



  return (
      <>
      { listings.length ?
        listings.map((l, idx) => 
          <div className="ListingItem" key={idx}>
              <Link to={`/details/${l._id}`}>
                <span>{l.photo && <img src={l.photo} alt="image" />}</span>
                &nbsp;  &nbsp;
                <span>{l.price}</span>
                &nbsp; - &nbsp;
                <span>{l.location}</span>
              </Link>
              {/* <button onClick={() => handleDelete(l._id)}>Delete</button> */}
          </div>)         
      :
      <h3>Check back for new listings!</h3>
      }
      </>
  );
}