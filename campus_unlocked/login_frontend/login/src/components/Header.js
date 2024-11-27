import React from 'react';
import { useEffect, useState } from 'react';
import './header.css'
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
    <div className="all_top">
    <img className="logo_header" src={require('./Logo_Campus.png')}/>
      <h1 className="all_campus">CAMPUS UNLOCKED</h1>
      <div>
      {token !== null ? (
  <button onClick={handleLogout} className="header_button">Logout</button>
) : null}
      <button onClick={handlehome} className="header_button">Home</button>
      </div>
    </div>
  );
}

export default Top;