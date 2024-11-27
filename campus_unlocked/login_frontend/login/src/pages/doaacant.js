import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DoaaSlideShow from '../fecth/doaacanteen';

const Example = () => {
    const images = [
        "https://content.jdmagicbox.com/comp/kanpur/q1/0512px512.x512.181218064902.a3q1/catalogue/new-doaa-canteen-iit--kanpur-coffee-shops-3zkweinang.jpg",
        "https://lh5.googleusercontent.com/p/AF1QipPjOJhx2EXViVK7mb0YqXxZDOJmE2hjHjjaS0iK=w500-h500-k-no",
        "https://10619-2.s.cdn12.com/rests/original/104_508711247.jpg",
        // "https://www.cse.iitk.ac.in/users/amit/birds/good/i0821w_heron,pond_spectator-sport.jpg"
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

function Doaa_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">DOAA Canteen</h1>
      <br/>
      <Example /> 
      
      <p>This is the only 24/7 food outlet on campus and also arguably the best food outlet inside the academic area.So if your on your acad work and would want a quick snack/meal maxresdefault
          this would be your best bet.Albeit crowded at times in the evening the waiting time pretty nominal.Foods that are a must try:
          Dhokla ,Channa batura,Kachori-Bhajji,white sauce pasta.
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
      <DoaaSlideShow/>
    </div>
  );
}

export default Doaa_app;
