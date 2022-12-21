import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import UpdateListingPage from "../UpdateListingPage/UpdateListingPage";


export default function ListingDetailPage({ listings, handleDelete, handleUpdateListing }) {
  const { id } = useParams();

  const [updatePage, setUpdatePage] = useState(false)
 
  const listingDetail = listings.find((listing) => listing._id === id)
 

  return (
    <>
      {listingDetail && updatePage ? 
      <UpdateListingPage listingDetail={listingDetail} handleUpdateListing={handleUpdateListing} setUpdatePage={setUpdatePage}/>
      :  listingDetail && 
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
            <button onClick={() => setUpdatePage(true)}>Edit</button>
          </div>
        </> 
        
        }
    </>
  );
}