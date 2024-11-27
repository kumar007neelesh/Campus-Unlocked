import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import LHCSlideShow from '../fecth/lhcfetch' ;
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "http://www.iitk.ac.in/doaa/images/slider/Img-2.jpg",
        "http://www.iitk.ac.in/doaa/images/slider/Img-5.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLY0d9gtf48jL1GUvDQ6Yz9Ods8qXQbiUo3MybMesEln4nD0n-HHONWi0DCsGS6DtPT5Y&usqp=CAU",
        "http://www.iitk.ac.in/doaa/images/slider/Img-8.jpg",]

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

function LHC_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Lecture Hall Complex</h1>
      <br/>
      <Example /> 
      <p> The lecture hall complex in IIT Kanpur is a centrally air-conditioned complex comprising of over 50 lecture halls. The complex is equipped with modern audio-visual facilities such as multimedia projectors, sound systems, and video conferencing systems. These lecture halls can accommodate a varying number of students, from small group discussions to large lectures. 
        Additionally, the complex also includes seminar rooms, faculty rooms, and administrative offices for the Department of Electrical Engineering, Department of Mechanical Engineering, and the Department of Materials Science and Engineering. Overall, the lecture hall complex in IIT Kanpur is a technologically advanced facility designed to provide students with an optimal learning environment.
    </p>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <LHCSlideShow/>
    </div>
  );
}

export default LHC_APP;
