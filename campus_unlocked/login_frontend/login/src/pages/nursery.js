import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import NurserySlideShow from '../fecth/nurseryfetch.js';
const Example = () => {
    const images = [
        "https://home.iitk.ac.in/~ajayraj/cs300A/campus-wiki/images/cover.jpg",
        "https://home.iitk.ac.in/~ajayraj/cs300A/campus-wiki/images/hall.JPG", 
        "https://home.iitk.ac.in/~ajayraj/cs300A/campus-wiki/images/img%20(10).JPG ",       
        "https://home.iitk.ac.in/~ajayraj/cs300A/campus-wiki/images/img%20(12).JPG ",
        "https://home.iitk.ac.in/~ajayraj/cs300A/campus-wiki/images/flowershow3.JPG ",
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

function Nursery_App() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Nursery</h1>
      <br/>
      <Example /> 
      <p> The Institute has one of the finest nurseries in the town that meets the requirements of the campus for seasonal as well as all-season flowers, bushes, hedges and shady trees of all varieties. Handpicked by an experienced staff, the unique stock is displayed in soulful surroundings here. 

The aim of the Nursery is simple - to inspire you by offering a unique and wide range of attractive plants. With many years of experience in every aspect of garden design and construction, the team of experienced professionals are dedicated to meeting the needs of a world class campus. As on July 31, 2011 the campus had a total of over 60,000 trees of various varieties that were planted by the nursery. 

The IIT Kanpur Nursery was established after the formation of the Institute Works Department(IWD), around the year 1975.In the past two decades, it has grown up to be a horticulture hub. </p>
   
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
 <NurserySlideShow/>
    </div>
  );
}

export default Nursery_App;
