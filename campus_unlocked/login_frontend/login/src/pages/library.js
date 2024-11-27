import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import LibrarySlideShow from '../fecth/libraryfetch.js'; 

const Example = () => {
    const images = [
        "https://iitk.ac.in/dora/givingback/assets/img/lib.jpg",
        "https://i1.wp.com/voxiitk.com/wp-content/uploads/2019/12/4.png?resize=468%2C262&ssl=1",
        "https://pkklib.iitk.ac.in/images/2022/08/06/590x590.png",
        "http://www.iitk.ac.in/doaa/images/slider/Img-11.jpg",
        "https://pbs.twimg.com/media/D3TCukwU4AAbveg.jpg",
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

function Lib_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Library</h1>
      <br/>
      <Example /> 
      <p>The library is housed with all modern amenities and is situated in a magnificent three-storied building covering an area of 6973 sq.m. The library's mission is to provide information services and access to bibliographic and full-text digital and printed resources to support the academic and information needs of all students, faculty, and staff.  

Library remains open for 358 days of the year, from 8 a.m. to 12 midnight on all working days; 9 a.m. to 12 midnight on Saturdays; 9 a.m. to 5.30 p.m. on Sundays and Gazetted holidays; and 24 hours during semester examinations. </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
     <LibrarySlideShow/> 
    </div>
  );
}

export default Lib_APP;
