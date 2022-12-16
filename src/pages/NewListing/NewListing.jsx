import { useState } from 'react';

export default function NewListingForm({ addListing }) {
  const [formData, setFormData] = useState('');

  function submitAddListing(evt) {
    evt.preventDefault();
    addListing(formData);
    setFormData('')
  }

  function handleChange(evt) {
    setFormData({ ...formData,[evt.target.name]: evt.target.value });
  }

  return (
    <div>
      <div className="form-container">
        <form className="NewListingForm" onSubmit={submitAddListing}>
          <label>Property Photo</label>
          <input type="text" name="Photo" value={formData.text} onChange={handleChange} placeholder="Upload Image"required />
          <label>Location</label>
          <input type="text" name="Location" value={formData.text} onChange={handleChange} placeholder="City, State"required />
          <label>Description</label>
          <input type="text" name="Description" value={formData.text} onChange={handleChange} placeholder="Include # of bd, ba and SQFT"required />
          <label>Price</label>
          <input type="text" name="Price" value={formData.text} onChange={handleChange} placeholder="Asking Price"required />
          <label>Seller</label>
          <input type="text" name="Seller" value={formData.text} onChange={handleChange} placeholder="Phone # & email address"required />
          <button type="submit">Add Listing</button>
        </form>
      </div>
    </div>
  );
}