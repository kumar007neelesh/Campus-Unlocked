import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import StadiumSlideShow from '../fecth/stadfetch.js';

const Example = () => {
    const images = [
        "https://www.iitk.ac.in/new/images/large-images/crickets/cricket-.jpg" ,
        "https://www.iitk.ac.in/oirold/images/campus/campus7.jpg ",
        "https://www.iitk.ac.in/new/images/large-images/basketball/basketball-1.jpg", 
        "https://i2.wp.com/voxiitk.com/wp-content/uploads/2016/12/Athletics.jpg?fit=3864%2C2576&ssl=1" ,        
        "https://pbs.twimg.com/media/DSnJ4AXWsAA-NGz?format=jpg&name=large ",
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

function Stad_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">IIT Kanpur Stadium</h1>
      <br/>
      <Example /> 
      <p> </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
      <StadiumSlideShow/>
    </div>
  );
}

export default Stad_APP;
