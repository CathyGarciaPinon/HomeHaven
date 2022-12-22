import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import UpdateListingPage from "../UpdateListingPage/UpdateListingPage";
import "./ListingDetailPage.css";


export default function ListingDetailPage({ user, listings, handleDelete, handleUpdateListing }) {
  const { id } = useParams();

  const [updatePage, setUpdatePage] = useState(false)

  const listingDetail = listings.find((listing) => listing._id === id)


  return (
    <>
      {listingDetail && updatePage ?
        <UpdateListingPage listingDetail={listingDetail} handleUpdateListing={handleUpdateListing} setUpdatePage={setUpdatePage} />
        : listingDetail &&
        <>
          <h1>Listing Details</h1>
          <div className="ListingDetailsContainer">
            <div className="ListingDetails">
              <div className="ListingPhoto">

                {listingDetail.photo && <img src={listingDetail.photo} alt="image" />}
              </div>
              <div className="ListingInfo">
                <ul>
                  <li>Entered: {new Date(listingDetail.updatedAt).toLocaleDateString()}</li>
                  <li>Price: {listingDetail.price}</li>
                  <li>Location: {listingDetail.location}</li>
                  <li>Description: {listingDetail.description}</li>
                  <li>Contact info: {listingDetail.seller}</li>
                </ul>
              </div>
            </div>
            {user._id === listingDetail.user ?
              <div className="ListingButtons">
                <button onClick={() => handleDelete(listingDetail._id)}>Delete</button>
                <button onClick={() => setUpdatePage(true)}>Edit</button>
              </div>
              :
              ""
            }
          </div>
        </>

      }
    </>
  );
}