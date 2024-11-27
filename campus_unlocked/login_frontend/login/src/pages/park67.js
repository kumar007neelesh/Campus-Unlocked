import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Park67SlideShow from '../fecth/park67fetch';
const Example = () => {
    const images = [
        //"https://www.facebook.com/oiriitk/photos/a.1703386006542680/1979818428899435/?type=3&eid=ARBRM-tBfn3WAQ-LD0oEY23H1w5HLbuEC27tSIJxIdU-KE_CNMqcYhI4Gw776dWQDdEbyl__5LXxKnR2&__xts__%5B0%5D=68.ARBesYI28qiuQ8FfcHs0fqzopMfxQEn99BSbasQ03n3pJ7FZ0-n_k7kK84V9YvrHnbmMC6HYPc1P-4x29GqaZcgfPcSt9r_AER7ytua4IDEX1PRQLDvFMZLiCMKWNl8zGOLqxSbf7Fm2E9isDqoE-7I776w1SZZuDwp0GO1mZceOoM9j1RY44uNChrKk7Wd2xVuR8HmIfZ7gkzXzZOFPTPYx7g1BYkvJXk-YQ1LXY3vw95czZsg67HVw0eNz0hnGaPdIQynYF9paeE2NPMdBHflVx34LMvkhBRnSW25nSCm_zEe9t8RuZ3LXczuStp3dRqRUmnDyzCdW7Izn_kYhga5o_vcHh6lMejitPD3liOqTHLiORGBr&__tn__=EHH-R",
        "https://mapio.net/images-p/29424947.jpg",
        "https://pbs.twimg.com/media/DeXZvLfWsAEUEbZ.jpg",
        "https://pbs.twimg.com/media/DeXZwVqXkAEVz0o.jpg",
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
                
                {/* <p>Third Slide</p> */}
            
            </Fade>
        </div>
      );
};

// export default Example;

function Park_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Park 67</h1>
      <br/>
      <Example /> 
      <p> Park 67, one of the most iconic landmarks of IITKanpur, named after its benefactors and its a testimony of the alumni’s relevance in the  life  of their alma mater.As you might have guessed this Park
          was built on the funds donated by class of 1967.This is open throught the day and is a good place to relax or have a peachful break.Also a great place for a morning walk.
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <Park67SlideShow/> 
      </div>
  );
}

export default Park_app;
