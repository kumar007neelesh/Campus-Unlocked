import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MamamioSlideShow from '../fecth/mamamiofetch.js'; 

const Example = () => {
    const images = [
        " https://b.zmtcdn.com/data/pictures/9/19968849/53c82ca485c65924b64e36e89a0d152d.jpg ", 
       " https://pbs.twimg.com/media/EUa6K0RVAAA9wbs?format=jpg&name=4096x4096",];

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
               
                
            </Fade>
        </div>
      );
};

// export default Example;

function MIO_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Mama Mio</h1>
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
      <MamamioSlideShow/>
    </div>
  );
}

export default MIO_APP;
