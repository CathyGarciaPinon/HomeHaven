export default function ListingItemPage({ listings, handleDelete }) {



  return (
      <>
      { listings.length ?
      listings.map((l, idx) => 
          <div className="ListingItem" key={idx}>
              {l.photo && <img src={l.photo} alt="image" />}
              <span>Entered: {new Date(l.updatedAt).toLocaleDateString()}</span>
              &nbsp; -- &nbsp;
              <span>{l.price}</span>
              <button onClick={() => handleDelete(l._id)}>Delete</button>
          </div>)         
      :
      <h3>Check back for new listings!</h3>
      }
      </>
  );
}