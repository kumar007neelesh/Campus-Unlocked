import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import OatSlideShow from '../fecth/oatfetch';

const Example = () => {
    const images = [
      "https://i.ytimg.com/vi/5czRwy87sE8/maxresdefault.jpg",
      "https://pbs.twimg.com/media/FbRvatEX0AAEju2.jpg:large", 
      "https://i.ytimg.com/vi/UbP5O_xYzDE/maxresdefault.jpg ",       
      "https://qph.cf2.quoracdn.net/main-qimg-885b77adddd28dd0b72859634721f9d5-pjlq ",
      "http://www.iitk.ac.in/inacomm15/images/DSC_1035.JPG ",
  ];

    return (
        <div>
            <Fade>
                <div className="each-slide">
                <div>
                    <img src={images[0]} className='i'/>
                </div>
                {/* <p>First Slide</p> */}
                </div>
                <div className="each-slide">
                {/* <p>Second Slide</p> */}
                <div>
                    <img src={images[1]} className='i'/>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[2]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[3]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[4]} className='i'/>
                </div>
                {/* <p>Third Slide</p> */}
                </div>
            </Fade>
        </div>
      );
};

// export default Example;

function OAT_App() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">OAT</h1>
      <br/>
      <Example /> 
      <br/>
      <p>IIT Kanpur provides rooms for all the clubs of Students’ Gymkhana in its Student Activity Centre (SAC) which is the hub of all the extracurricular activities of students. It also houses Open Air Theatre (OAT) with a seating capacity of over 1400 people which is used in almost every inter-hall competition like Galaxy, Takneek etc. With the help of its large projector screen and a great sound system, it serves as a means of joy and fun for students by screening various movies both bollywood as well as anime along with FIFA World Cup matches and many more in a regular time period. A large number of students along with their friends come and enjoy the luxury of watching their favourite movie with each other under the roof of open sky. In the night, it also serves as a wonderful place where people can have a peaceful heart to heart talk while watching the beautiful star-lit sky. And to add to more fun, there is also a food court where food is available 22.5 hours of the day. It has shops vending snacks, rolls, dosas etc. Many birthday parties are held here. One of the inside walls of OAT serves as Rock Climbing wall where students are taught under supervision of a well trained instructor. The climbing wall has 3 sections of varying grades each of height 11.4 meters. The first two sections, easy and medium, are of 2 meters and the difficult section is of 2.85 meters making total span of the wall 6.85 meters. </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <OatSlideShow/>
    </div>
  );
}

export default OAT_App;
