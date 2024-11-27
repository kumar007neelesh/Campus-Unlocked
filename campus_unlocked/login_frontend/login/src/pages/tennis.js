import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import TennisSlideShow from '../fecth/tennisfetch.js';

const Example = () => {
    const images = [
        "https://www.iitk.ac.in/new/images/large-images/lawn-tennis/Lawn-Tennis-2.jpg",
        "https://www.iitk.ac.in/new/images/large-images/lawn-tennis/lawn-tennis.jpg",
        "https://i.pinimg.com/originals/1d/aa/f9/1daaf92246e49b510f214ed0ed2e59f9.jpg",
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
            </Fade>
        </div>
      );
};

// export default Example;

function Ten_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Tennis Court</h1>
      <br/>
      <Example /> 
      <p> IIT Kanpur has tennis courts on its campus that are primarily used for recreational and competitive purposes by students, faculty, and staff members. The tennis courts are located near the sports complex and are easily accessible to those who wish to use them.

The tennis courts at IIT Kanpur are well-maintained and cleaned regularly to ensure that they are in good condition for use. There are a total of six tennis courts available, which are made of hard court surfaces and are suitable for playing both singles and doubles matches.

The tennis courts are equipped with modern amenities such as floodlights, which make it possible for users to play even during low-light conditions. There are also seating arrangements available near the tennis courts for spectators to watch the matches.

The tennis courts at IIT Kanpur are used for various events and competitions, including intercollegiate tournaments, club matches, and other recreational activities. The institute also provides coaching facilities for those who wish to improve their tennis skills, and students can avail of these facilities by enrolling in the institute's sports programs.

Overall, the tennis courts at IIT Kanpur are a well-maintained and popular facility on the campus that provides an excellent opportunity for users to engage in recreational activities and improve their tennis skills. The modern amenities and coaching facilities make it an ideal venue for hosting various events and competitions, making it a hub of sporting activity on the campus.</p>
 

<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
 <TennisSlideShow/>
    </div>
  );
}

export default Ten_APP;
