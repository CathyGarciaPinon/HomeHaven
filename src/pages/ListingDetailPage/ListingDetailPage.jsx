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
          <div>
            <span>{listingDetail.photo && <img src={listingDetail.photo} alt="image" />}</span>
            &nbsp;  &nbsp;
            <span>Location: {listingDetail.location}</span>
            &nbsp; - &nbsp;
            <span>Description: {listingDetail.description}</span>
            &nbsp; - &nbsp;
            <span>Price: {listingDetail.price}</span>
            &nbsp; - &nbsp;
            <span>Contact info: {listingDetail.seller}</span>
            &nbsp; - &nbsp;
            <span>Entered: {new Date(listingDetail.updatedAt).toLocaleDateString()}</span>
          
          </div>
        </> 
        : 
        ""}
    </>
  );
}