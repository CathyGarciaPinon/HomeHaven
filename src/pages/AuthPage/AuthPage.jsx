import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div className='full-screen-container'>
        <h1>Welcome to HomeHaven</h1>
        <h2>Auth Page</h2>
        <div className='login-container'>
          <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
          { showSignUp ?
              <SignUpForm setUser={setUser} />
              :
              <LoginForm setUser={setUser} />
          }
        </div>
      </div>
    </>
  );
}