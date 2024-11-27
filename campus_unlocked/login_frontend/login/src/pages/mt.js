import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MtSlideShow from '../fecth/mtfetch.js';
const Example = () => {
    const images = [
        "https://qph.cf2.quoracdn.net/main-qimg-8a7097ece4a52f9481b56ae26441b20a.webp",
        "https://i.ytimg.com/vi/AVLs2KeFuiw/maxresdefault.jpg",
        "https://i.ytimg.com/vi/Sejk0y45_P4/maxresdefault.jpg",
        "http://www.iitk.ac.in/mt/images/cards/welcome-to-motor-transport-section.jpg",
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

function MT_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">MT</h1>
      <br/>
      <Example /> 
      <p> The Motor Transport (MT) section at IIT Kanpur is responsible for managing the transportation needs of the institute. It maintains a fleet of vehicles that are used for various purposes, such as transportation of students, faculty, and staff members, as well as for other official purposes.

The MT section has a range of vehicles in its fleet, including cars, buses, vans, and trucks. The vehicles are well-maintained and regularly serviced to ensure that they are in good condition and safe for use. The drivers employed by the MT section are experienced and trained to provide safe and comfortable transportation services to the members of the institute.

In addition to managing the transportation needs of the institute, the MT section also provides assistance during emergency situations, such as medical emergencies or power outages. It also provides transportation services for special events and occasions organized by the institute, such as convocations and seminars.
</p>
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
 <MtSlideShow/>
    </div>
  );
}

export default MT_APP;
