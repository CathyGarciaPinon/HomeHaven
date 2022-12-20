import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


export default function ListingDetailPage({ listings, handleDelete }) {
  const { id } = useParams();
  const [listingDetail, setListingDetail] = useState(null)

  useEffect(() => {
    function getListing() {
      const listing = listings.find((listing) => listing._id === id)
      setListingDetail(listing)
    } 
    getListing()
  }, [id])


  return (
    <>
      {listingDetail ? 
        <>
          <h1>Listing Details</h1>
          <div>
            <span>{listingDetail.photo && <img src={listingDetail.photo} alt="image" />}</span>
            &nbsp;  &nbsp;
            <li>Location: {listingDetail.location}</li>
            &nbsp; - &nbsp;
            <li>Description: {listingDetail.description}</li>
            &nbsp; - &nbsp;
            <li>Price: {listingDetail.price}</li>
            &nbsp; - &nbsp;
            <li>Contact info: {listingDetail.seller}</li>
            &nbsp; - &nbsp;
            <li>Entered: {new Date(listingDetail.updatedAt).toLocaleDateString()}</li>
            <button onClick={() => handleDelete(listingDetail._id)}>Delete</button>
          </div>
        </> 
        : 
        ""}
    </>
  );
}