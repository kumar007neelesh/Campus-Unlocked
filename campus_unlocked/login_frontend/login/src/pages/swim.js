import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SwimSlideShow from '../fecth/swimfetch.js';

const Example = () => {
    const images = [
        "https://www.iitk.ac.in/pes/images/cards/swimming-pool.jpg",
        "http://www.iitk.ac.in/inacomm15/demo/Swimming%20Pool_a.JPG",
        "https://www.iitk.ac.in/oirold/images/campus/campus10.jpg",
        "https://i.pinimg.com/originals/67/a6/36/67a63622004231652287166b48f84505.jpg",
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
            </Fade>
        </div>
      );
};

// export default Example;

function Swim_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Swimming Pool</h1>
      <br/>
      <Example /> 
      <p> IIT Kanpur has a swimming pool on its campus that is primarily used by students, faculty, and staff members for recreation and fitness. The swimming pool is located near the sports complex and is easily accessible for those who wish to use it.

The swimming pool at IIT Kanpur is an outdoor pool that is surrounded by a deck area where users can relax, sunbathe, or simply sit and watch others swim. The pool is rectangular in shape, measures 25 meters in length and 10 meters in width, and has a depth of 4 feet to 6 feet, making it suitable for both novice and experienced swimmers.

The swimming pool at IIT Kanpur is well-maintained and cleaned regularly to ensure that it is hygienic and safe for use. It is equipped with a filtration system that maintains the water quality and temperature, and there are also shower and changing room facilities available for users.

The swimming pool is open for use during specific hours of the day, and users are required to follow the rules and regulations set by the institute to ensure their safety and the safety of others. Additionally, the swimming pool is also used for hosting various swimming competitions and events, which attract participants from other institutions and clubs.

Overall, the swimming pool at IIT Kanpur is a well-maintained and popular facility on the campus that provides an excellent opportunity for users to engage in fitness activities and relax in a beautiful outdoor setting.</p>
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
   <SwimSlideShow/>
    </div>
  );
}

export default Swim_APP;
