import { useState } from 'react';

export default function NewListingForm({ addListing }) {
  const [formData, setFormData] = useState({
    photo: '',
    location: '',
    description: '',
    price: '',
    seller: ''
  });
  
  function handleChange(evt) {
    setFormData({...formData,[evt.target.name]: evt.target.value });
  }

  function submitAddListing(evt) {
    evt.preventDefault();
    addListing(formData);
    setFormData({
      photo: '',
      location: '',
      description: '',
      price: '',
      seller: ''
    });
  }


  return (
    <div>
      <h1>Enter New Listing information below</h1>
      <div className="form-container">
        <form className="NewListingForm" onSubmit={submitAddListing}>
          <label>Property Photo</label>
          <input type="text" name="photo" value={formData.photo} onChange={handleChange} placeholder="enter image url" />
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" required />
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Include # of bd, # of ba, SQFT and property features" required />
          <label>Price</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Asking Price" required />
          <label>Seller</label>
          <input type="text" name="seller" value={formData.seller} onChange={handleChange} placeholder="Phone # & email address" required />
          <button type="submit" onSubmit={submitAddListing}>Add Listing</button>
        </form>
      </div>
    </div>
  );
}