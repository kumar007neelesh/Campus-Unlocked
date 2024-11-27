import React from 'react';
import './header.css'
import { useEffect, useState } from 'react';
// import LogoutButton from './logout';

  const handleLogout = () => {
    window.localStorage.clear(); // remove token from local storage
    window.location.href = '/'; // redirect to main page
  };

  const handlehome= () =>{
    window.location.href = '/mainpage';
  };

  function Top() {
    const [token, setToken] = useState(localStorage.getItem('token'));
  
      useEffect(() => {
          setToken(localStorage.getItem('token'));
    }, []);
    return (
      <div className="page_top">
      <img className="page_logo_header" src={require('../components/Logo_Campus.png')}/>
        <h1 className="page_campus">CAMPUS UNLOCKED</h1>
        <div>
        {token !== null ? (
    <button onClick={handleLogout} className="page_header_button">Logout</button>
  ) : null}
        <button onClick={handlehome} className="page_header_button">Home</button>
        </div>
      </div>
    );
  }
export default Top;