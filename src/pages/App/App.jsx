import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as listingsAPI from '../../utilities/listings-api';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewListing from '../NewListing/NewListing';
import ListingsPage from '../ListingsPage/ListingsPage';
import ListingDetailPage from '../ListingDetailPage/ListingDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [listings, setListings] = useState([]);

  async function addListing(listing) {
    const newListing = await listingsAPI.create(listing);
    setListings([...listings, newListing]);
  }

  async function handleDelete(id) {
    await listingsAPI.deleteListing(id);
    const remainingListings = listings.filter(listing => listing._id !== id);
    setListings(remainingListings);
  }

  useEffect(function() {
    async function getListings() {
      const listings = await listingsAPI.getAll();
      setListings(listings);
    }
    getListings();
  }, []);


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/listings/new" element={<NewListing addListing={addListing}/>} handleDelete={handleDelete} />
              <Route path="/listings" element={<ListingsPage listings={listings}/>} handleDelete={handleDelete} />
              <Route path="/details/:id" element={<ListingDetailPage listings={listings}/>} handleDelete={handleDelete} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
