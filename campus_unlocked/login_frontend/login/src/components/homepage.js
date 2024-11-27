import React from 'react';
import '../App.css';
// import './header.css';
import LogoutButton from './logout';
import { Link} from "react-router-dom";
// import Top from "./Header.js"
const handleLogout = () => {
  window.localStorage.clear(); // remove token from local storage
  window.location.href = '/'; // redirect to main page
};

function Top() {
  return (
    <div className="home_top">
      <h1 className="home_campus">CAMPUS UNLOCKED</h1>
    </div>
  );
}

function Hom() {
   

   

   const handleClickGuestUser = () => {
     // Do something when guest user button is clicked, like redirect to a guest homepage
   }

  return (
      <body>
      <main>
      <img className="logo_homepage" src={require('./Logo_Campus.png')}/>
      {/* <div class="desc_box"></div> */}
        <h2 className="heading_home"> Description:</h2>
        <div className="description_home">
          Campus unlocked is a software designed to act as virtual guide for the campus along with many social features such as sharing photos, trending photos, etc. Users can find places in the order of proximity to their current location and also find out what events are happening/going to happen there. 
        </div>
        <h2 className="heading_visitas">Visit As:</h2>
        
        <div className="visit-options_home">
        {/* <div className="visit-options-container_home1"><a href='/signin'><u>Authorized User</u></a></div> */}
        <div className="visit-options-container_home1"> <a className="a_home" href='/signin'>Campus Community</a></div> 
        <div className="visit-options-container_home1">  <a className="a_home" href='/mainpage'>Guest User</a></div>
        
        </div>
      </main>
      </body>
  
  );
}

function Home(){
  return (
    <div>
      <Top/>
      <Hom></Hom>
    </div>
  )
}

export default Home;