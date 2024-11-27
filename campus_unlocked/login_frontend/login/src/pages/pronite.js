import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ProniteSlideShow from '../fecth/pronitefetch';
const Example = () => {
    const images = [
        "https://i.ytimg.com/vi/HxtgHCftqYE/maxresdefault.jpg",
        "https://lh3.googleusercontent.com/p/AF1QipM0-fNMw0J1xUiCpJOefuSgL0dEf5GdkFvGCvks=s1600-w400",
        "https://gumlet.assettype.com/knocksense%2Fimport%2F29660215%2Forigin.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
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

function Pro_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Pronite Ground</h1>
      <br/>
      <Example /> 
      <p className='info'> The pronite grounds of IIT Kanpur refer to the area where the pronite event is held during the institute's annual cultural festival, Antaragni. The pronite event is a night-long extravaganza that features performances by popular artists and musicians from across the country.

The pronite grounds are located in the center of the IIT Kanpur campus and can accommodate thousands of people. The area is transformed into a festive venue, complete with stage setups, lighting, and sound systems, creating a vibrant atmosphere.
If you are a music lover, visiting the pronite grounds of IIT Kanpur during the Antaragni cultural festival can be a great experience. The pronite event features performances by some of the biggest names in the Indian music industry, making it a must-attend event for music enthusiasts.

Apart from the musical performances, the atmosphere at the pronite grounds during Antaragni is also quite lively and festive. You can enjoy the various food and beverage stalls, take part in fun activities, and soak in the overall energy of the event.</p>
      
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <ProniteSlideShow/>
    </div>
  );
}

export default Pro_APP;
