import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import OldsacSlideShow from '../fecth/oldsacfetch';
const Example = () => {
    const images = [
        "https://www.iitk.ac.in/pes/images/cards/old-sports-complex.jpg",
        "https://www.iitk.ac.in/pes/images/cards/old-sports-complex/gym.jpg",
        "https://www.iitk.ac.in/pes/images/cards/old-sports-complex/skating-club.jpg",
        "https://www.iitk.ac.in/pes/images/cards/old-sports-complex/vollyball.jpg",
    ]
    ;

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

function OS_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Old SAC</h1>
      <br/>
      <Example /> 
      <p> It provides various sports facilities to students of IIT kanpur.Residents of IIT Kanpur can access various facilities as per the rules and regulations.
        Squash-Only clean non-marking shoes are allowed on the courts.Proper sports kit is a must(Shorts and T-shirt)
              timings-Morning 6:00 to 10:00 hours, Evening :16:00 to 21:00 hours
        Badminton-Only clean non-marking shoes are allowed on the courts.Proper sports kit is a must(Shorts and T-shirt)
              timings-From 5:30 am to 8:30 pm, open to all
                      From 5pm to 8:30 pm in the evening, open to all with one court reserved for faculty from 6:30 to 7:30.
       Volleyball-Entry to all the courts allowed only with proper sports kit (Shorts/Tracks, T-shirts)
                  Only clean non-marking shoes are allowed on the courts
                  Please bring your own Volleyball
                  Switch off the lights before leaving
         timings- 6:00 am-  7:30 am-Faculty
                  6:00 pm- 7:00 pm	CPA
                  7:00 pm- 9:00 pm	Institute Team
        Gymnasium-Sports wear and shoes are mandatory.
        timings- From 5:30 am to 8:30 pm, open to all
                      From 5pm to 8:30 pm
      </p> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <OldsacSlideShow/>
      </div>
  );
}

export default OS_app;
