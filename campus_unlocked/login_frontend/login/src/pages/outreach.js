import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import OutreachSlideShow from '../fecth/outreachfetch';
const Example = () => {
    const images = [
        "https://lh3.googleusercontent.com/p/AF1QipPAIHK8T9DnYQx7xhrT8m6F-w_ZlVCjRpJkPriI=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPItPXd_iRmms27ffPEP4d8Em-D2slnpeOLDEiX=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipO2QIhiXbCq2NQZ4wrkyDcBu9SCcTj7DeNtwE_M=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipMKjC4Wbf6uEZsNmoEH0KUjdFsk74x_YD6u-JNK=s1360-w1360-h1020"
    ,
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

function Out_app() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Outreach Building</h1>
      <br/>
      <Example /> 
      <p>This fully air-conditioned facility serves as an educational resource primarily used for lectures, guest speakers, seminars, workshops, conferences, academic panel discussions, trainings, alumni reunions and other activities. The building houses an auditorium with a seating capacity of 210, a seminar room with a seating capacity of 40, a video–conferencing room with a seating capacity of 30 and a lawn that can accommodate 300 people. These rooms are furnished with state-of-the-art audio-visual facilities with a control room at the back of the auditorium, remote controlled LCD projector with a large screen and other portable equipment. These multi-purpose areas can be customized for any event and number of people. 
The first floor of the building has a souvenir shop that sells myriad items such as caps, bags, mementos, mugs, table tops, folders, sweatshirts, ties, wallets, watches etc.with IITK logo and captions inscribed on them. One part of the building is used as a dedicated office space for managing day-to-day tasks related to alumni interaction. This office space also has a Students’ Placement Office (SPO) that handles all aspects of placements at the institute right from contacting companies to managing logistics, arranging for tests, pre-placement talks and conducting final interviews, https://indiapl.com/uttar/outreach-auditorium-7081
      </p> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <OutreachSlideShow/>
      </div>
  );
}

export default Out_app;
