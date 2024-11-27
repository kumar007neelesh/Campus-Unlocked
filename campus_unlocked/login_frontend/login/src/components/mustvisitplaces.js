// import React from "react";
// import ImageGallery from "./Gallery";
// import Top from "./header";

import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./must.css";
// import './header.css';

// import React from 'react';
const options = [
  { label: "OAT", link: "/oat" },
  { label: "New SAC", link: "/ns" },
  { label: "Old SAC", link: "/os" },
  { label: "LHC", link: "/lhc" },
  { label: "RM", link: "/rm" },
   { label: "Auditorium", link: "/audi" },
   { label: "Airstrip", link: "/flight" },
   {label:"Library", link:"/lib"},
   { label: "CCD", link: "/ccd" },
   { label: "Mama Mio", link: "/mio" },
   { label: "Nursery", link: "/nursery" },
   { label: "Hockey Ground", link: "/hock" },
   { label: "Tennis Court", link: "/tennis" },
   { label: "Swimming Poll", link: "/swim" },
   { label: "Main Stadium", link: "/stad" },
   { label: "Pronite Ground", link: "/pro" },
   { label: "MT", link: "/mt" },
   { label: "DOAA Canteen", link: "/doaa" }, { label: "Outreach", link: "/out" }, { label: "Park67", link: "/park" }, { label: "Oxidation Pond", link: "/ox" },
];

function DropdownMenu() {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">Select Location</button>
      <div className="dropdown-content">
        <div className="options-container">
          {options.slice(0, 21).map(({ label, link }) => (
            <Link key={link} to={link}>{label}</Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
// export default DropdownMenu;



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
    
    <div className="must_top">
    <img className="must_logo_header" src={require('./Logo_Campus.png')}/>
      <h1 className="must_campus">CAMPUS UNLOCKED</h1>
      <div>
      <DropdownMenu/>
      {token !== null ? (
  <button onClick={handleLogout} className="must_header_button">Logout</button>
) : null}
      <button onClick={handlehome} className="must_header_button">Home</button>
      </div>
    </div>
  );
}
function ImageGallery() {
  return (
    <div className="image-gallery">
        <h1 >Must Visit Places</h1>
      <div className="row1">
        <Link to="/oat" className="column1">
          <img src="http://www.iitk.ac.in/inacomm15/images/DSC_1035.JPG" alt="Image 1" className="ri" />
          <p className="must_p">OAT</p>
        </Link>
        <Link to="/lhc" className="column1">
          <img src="http://www.iitk.ac.in/math/workshop-and-conference/ICMCB/pic/LHC-1.jpg" alt="Image 2" className="ri"/>
          <p className="must_p">Lecture Hall Complex</p>
        </Link>
        <Link to="/lib" className="column1">
          <img src="https://iitk.ac.in/dora/givingback/assets/img/lib.jpg" alt="Image 3" className="ri"/>
          <p className="must_p">PK Kelkar Library</p>
          </Link>
      </div>
      <div className="row2">
      <Link to="/rm" className="column1">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-ba32e62752c191dbb2aaefdbad7808fb-lq" alt="Image 4" className="ri"/>
          <p className="must_p">Rajeev Motwani Building</p>
          </Link>
        <Link to="/flight" className="column1">
          <img src="https://fastly.4sqi.net/img/general/600x600/57723951_FUTYjaEAO7tIItJoTNagpSq9cdQiusRK9MQfTD0geuA.jpg" alt="Image 5" className="ri"/>
          <p className="must_p">Airstrip</p>
          </Link>
      </div>
    </div>
    // </div>
  );
}


function MustVisit() {
  return (
    <div >
        <Top/>
        <ImageGallery/>

      
    </div>
    // </div>
  );
}

export default MustVisit;
