export default function ListingItemPage({ listings, handleDelete }) {



  return (
      <>
      { listings.length ?
      listings.map((l, idx) => 
          <div className="ListingItem" key={idx}>
              <span>{l.photo && <img src={l.photo} alt="image" />}</span>
              {/* <span>Entered: {new Date(l.updatedAt).toLocaleDateString()}</span> */}
              <span>{l.price}</span>
              &nbsp; - &nbsp;
              <span>{l.location}</span>
              <button onClick={() => handleDelete(l._id)}>Delete</button>
          </div>)         
      :
      <h3>Check back for new listings!</h3>
      }
      </>
  );
}