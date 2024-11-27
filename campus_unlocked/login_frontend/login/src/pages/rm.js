import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import RmSlideShow from '../fecth/rmfetch';
const Example = () => {
    const images = [
        "https://pbs.twimg.com/media/C9Safz8XcAAcQMD.jpg" ,

        "http://www.iitk.ac.in/july14cse/images/2012-10-13-1-resized.jpg",
        
        "https://www.iitk.ac.in/ee/images/research_labs/large-images/Power-electronics-peri-lab-front.JPG" ,
        
        "https://i.pinimg.com/originals/60/9c/ee/609ceec817d77ea5aa71978edf5f6fa0.jpg",
        
        "https://static.india.com/wp-content/uploads/2020/12/pp.jpg?impolicy=Medium_Resize&w=1200&h=800",
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

function RM_App() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Rajeev Motwani Building</h1>
      <br/>
      <Example /> 
    
      <p>The Rajeev Motwani Building is a newly constructed building of Department of Computer Science and Engineering. The Institute recieved a donation of $1.5 million by Mrs Asha Jadeja Motwani, wife of Late Professor Motwani, and their daughters on the occasion of the 49th birth anniversary of Rajeev on March 24th, 2011. The donation was towards the construction of the Rajeev Motwani Building at IIT Kanpur; the Building will house activities of the Department of Computer Science and Engineering, and will also house activities for nurturing entrepreneurship and innovation in the areas influenced by Rajeev's work. The donation also marks the start of a collaboration between the Rajeev Motwani Foundation and IIT Kanpur to help student and faculty entrepreneurs collaborate on transforming innovative ideas and technologies into successful enterprises. The Motwani building is a six-story building with a floor area of 3,650 square meters and has a 200 seat classroom (RM 101), 22 faculty offices and 17 labs. It is designed by architects Messers Kanvinde, Rai and Chowdhury (New Delhi). The project was initiated and construction work started in early May 2011 and is now available at the service of the Institute. 

Rajeev Motwani Building  is open 8:00 a.m.-7:00 p.m. all days (for non CSE students) and  24/7 for CSE students. 
 </p>
 <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
    <RmSlideShow/>
    </div>
  );
}

export default RM_App;
