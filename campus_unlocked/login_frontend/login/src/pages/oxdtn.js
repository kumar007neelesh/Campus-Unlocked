import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import OxdnSlideShow from '../fecth/oxdnfetch';
const Example = () => {
    const images = [
        "https://i.ytimg.com/vi/NOmKh7Oksak/maxresdefault.jpg",
        "https://www.cse.iitk.ac.in/users/amit/birds/good/i0859w_oxidation-pond3_next-to-hall8.jpg",
        "https://www.cse.iitk.ac.in/users/amit/birds/family/i2533w_heron_wide_g.jpg",
        "https://www.cse.iitk.ac.in/users/amit/birds/good/i0821w_heron,pond_spectator-sport.jpg",
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

function Ox_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Oxidation Pond</h1>
      <br/>
      <Example /> 
      <p>Located Right behind pronite Ground,this pond is quite a sight especially in the mornings and evenings.You could find a variety of birds,ducks and swans header
          Here's a list of birds that are commonly found:
          Laughing Dove
          Common Hawk Cuckoo
         Greater Coucal
        Indian Robin
        Pied Bushchat
        Indian Pond Heron
         White-browed Wagtail
         White Wagtail
         Lesser Whitethroat
         Eurasian Collared Dove
         Marsh Sandpiper
         Black Winged Stilt
         Red-Wattled Lapwing
         Black Kite
         Rock Pigeon
         Little Grebe
         Cattle Egret
         Indian Peafowl
         House Crow
         Common Myna
         Red Vented Bulbul
         Common Babbler
         Any Ornithophile you definitly have escape place in this here on campus!
 </p>
 <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <OxdnSlideShow/>
 </div>
  );
}

export default Ox_app;
