import { useParams } from "react-router-dom";
import { useState } from "react";


export default function UpdateListingPage({listingDetail, handleUpdateListing, setUpdatePage}) {
  const [updateListing, setUpdateListing] = useState(
    {
    photo: listingDetail && listingDetail.photo, 
    location: listingDetail && listingDetail.location, 
    description: listingDetail && listingDetail.description,
    price: listingDetail && listingDetail.price,
    seller: listingDetail && listingDetail.seller,
  }
  );

  function handleChange(evt) {
    const updatedListForm = {...updateListing, [evt.target.name]: evt.target.value};
    setUpdateListing(updatedListForm);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateListing(updateListing, listingDetail._id);
    setUpdatePage(false);
  }

  console.log(listingDetail);
  return (
    <>
    <h1>Edit Listing</h1>
        <form onSubmit={handleSubmit}>
          <label>Property Photo</label>
          <input type="text" name="photo" value={updateListing.photo} onChange={handleChange}  />
          <label>Location</label>
          <input type="text" name="location" value={updateListing.location} onChange={handleChange}  />
          <label>Description</label>
          <input type="text" name="description" value={updateListing.description} onChange={handleChange}  />
          <label>Price</label>
          <input type="text" name="price" value={updateListing.price} onChange={handleChange}  />
          <label>Seller</label>
          <input type="text" name="seller" value={updateListing.seller} onChange={handleChange} />
          <button type="submit" onSubmit={handleUpdateListing}>Update Listing</button>
        </form>
    </>
  );
}