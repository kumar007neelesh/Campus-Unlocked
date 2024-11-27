import React from "react";

function LogoutButton() {
    const handleLogout = () => {
      window.localStorage.clear(); // remove token from local storage
      window.location.href = '/'; // redirect to main page
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }
  
  export default LogoutButton;
  