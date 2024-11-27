import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CcdSlideShow from '../fecth/ccdfetch';

const Example = () => {
    const images = [
        "https://voxiitk.com/wp-content/uploads/2016/08/14164019_1651698045120122_1923104527_o.jpg", 

        "https://voxiitk.com/wp-content/uploads/2016/08/14123579_1651698081786785_1829806951_o.jpg ",

        "https://pbs.twimg.com/media/Eb_SInjU4AAE5h5?format=jpg&name=large ",

        "https://lh5.googleusercontent.com/p/AF1QipPH9fV_27sZcmBk6oJ9esJWcPYPB7RJRACZw9Vx=w500-h500-k-no", 

        "https://content3.jdmagicbox.com/comp/bangalore/j2/080pxx80.xx80.180823193020.d7j2/catalogue/cafe-coffee-day-yediyur-bangalore-coffee-shops-0fzelh1dix.jpg ",
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

function CCD_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">CCD</h1>
      <br/>
      <Example /> 
      
      <p>Recently, Cafe Coffee Day (CCD), one of the most popular campus hangouts, underwent a renovation, modifying its interiors and catering facilities.  

Operating on a space funded by the Batch of '87, the CCD outlet is situated just next to the P K Kelkar Library. It serves CCD's conventional menu like patries, brownies, cappacino, chocolate drinks etc. at a 40% subsidised rate. At exam times, it provides a nice refreshing environment for students studying at the library.  

The outlet is open from 9 am to 11 pm on all days. 

Must try- Choco-nirvana sundae, Devil’s Own </p>
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
<CcdSlideShow/>
    </div>
    
  );
}

export default CCD_APP;
