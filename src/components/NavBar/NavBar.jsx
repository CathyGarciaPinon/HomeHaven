import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <ul className='Nav'>
        <li id="nav">Welcome, {user.name}</li>
        <li id="nav"><Link to="/">All Listings</Link></li>
        <li id="nav"><Link to="/listings/new">New Listing</Link></li>
        <li id="nav"><Link to="/about">About</Link></li>
        <li className='logout'><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      </ul>
    </nav>
  );
}