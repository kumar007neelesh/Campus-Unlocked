import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import FlightSlideShow from '../fecth/flightfetch';

const Example = () => {
    const images = [
        "https://iitk.ac.in/aero//images/gallery/flight-laboratory/24.jpg",
        "https://iitk.ac.in/aero//images/gallery/flight-laboratory/23.jpg",
        "https://i1.rgstatic.net/ii/lab.file/AS%3A748324219006977%401555425805006_xl",
        "https://qph.cf2.quoracdn.net/main-qimg-dc93f2f904784fece1e4406b913ead3b-lq"
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

function Flight_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Flight Laboratory</h1>
      <br/>
      <Example /> 
      
      <p>The flight laboratory is a unique national facility with three single engine airplanes: 1. Piper Super Cub - a two seater a/c, 2. Cessna Skylane - a four seater and 3. Piper Saratoga - a six seater.
      The flight laboratory runs courses in flight testing wherein students participate to collect, analyze and evaluate performance and handling qualities of the airplanes
      The flight laboratory also has several gliders and an active gliding center where students as well as any member of IIT community can become a member and aspire to reach the stage of getting his/her licence to fly the gliders.
      Flight laboratory is actively involved in the research towards parameter estimation from flight data. Accordingly, the aircraft instrumentation is being upgraded. The expertise developed here are being shared with various aero agencies to contribute towards research and development in the field of flight testing
      Note:- Permission is required to enter the Flight laboratory,So if are highly interested you may have to take a permission.
      Contact details:
      Faculty In-charge:
     M.Kamath, Associate Professor
       gmkamath@iitk.ac.in
       +91-512-259-6614 (w)

     Vipul Mathur, Chief Engineer
     Flight Lab
     vipulm@iitk.ac.in
     +91-512-259-7729(O) / 8225(R) </p> 
     <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
     <FlightSlideShow/>
     </div>
  );
}

export default Flight_app;
