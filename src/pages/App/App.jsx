import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as listingsAPI from '../../utilities/listings-api';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewListing from '../NewListing/NewListing';
import ListingDetailPage from '../ListingDetailPage/ListingDetailPage';
import UpdateListingPage from '../UpdateListingPage/UpdateListingPage';
import { DOM_KEY_LOCATION } from '@testing-library/user-event/dist/keyboard/types';
import ListingItemPage from '../ListingItemPage/ListingItemPage';
import AboutPage from '../AboutPage/AboutPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  async function addListing(listing) {
    const newListing = await listingsAPI.create(listing);
    setListings([...listings, newListing]);
    navigate('/listings');
  }

  async function handleDelete(id) {
    await listingsAPI.deleteListing(id);
    const remainingListings = listings.filter(listing => listing._id !== id);
    setListings(remainingListings);
    navigate('/listings')
  }

  async function handleUpdateListing(listingFormData, id) {
    const listing = await listingsAPI.updateListing(listingFormData, id);
    const updatedListings = listings.map(l => l._id === id ? listing : l);
    setListings(updatedListings);

  }

  useEffect(function () {
    async function getListings() {
      const listings = await listingsAPI.getAll();
      setListings(listings);
    }
    getListings();
  }, []);


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <img className='logo' src="/logo512.png" />
          <Routes>
            <Route path="/" element={<ListingItemPage listings={listings} handleDelete={handleDelete} />} />
            <Route path="/listings/new" element={<NewListing addListing={addListing} handleDelete={handleDelete} />} />
            <Route path="/listings/:id" element={<ListingDetailPage listings={listings} handleDelete={handleDelete} handleUpdateListing={handleUpdateListing} user={user} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
