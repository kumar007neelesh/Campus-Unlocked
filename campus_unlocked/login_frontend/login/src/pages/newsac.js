import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import NewsacSlideShow from '../fecth/newsacfetch.js';
const Example = () => {
    const images = [
        "https://lh3.googleusercontent.com/p/AF1QipNkrAv2roC6NNl_vFEbUslr48CpGd4WxqVUK-Hw=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/j0kqMIP1CDXtw5zHAxM1N6W4ZIsC9rMI_X6wInP8K0y8ap79aQgBqJfBFyrCmWeFS5ntHushvr5Xf8HMMP9wneHwyYE=w512-rw",
        "https://www.iitk.ac.in/new/images/large-images/table-tennis/table-tennis.jpg",
        "https://www.iitk.ac.in/new/images/large-images/badminton/badminton.jpg",
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

function NS_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">New SAC</h1>
      <br/>
      <Example /> 
      <p>New Student Student Activies Centre(New SAC) is main centre for all student activies.
          It provides various facilities to residents of IIT Kanpur including Sports Complex,Open Air Theatre, Offices of Student Gymkhana Representatives,Different Shops etc. 
          It is fully equipped with modern architecture and one of the main attraction at IIT kanpur campus. 
          Residents of IIT Kanpur can access various facilities as per the rules and regulations.
          Sports Complex has high class indoor courts.It opens early in the morning at 6 AM and closes at 11 PM.Anyone who wants to play any indoor game must have non-marking shoes.Reception section also has some non-marking shoes. Which can be taken on the behalf of ID-card.
         It has a Badminton-Hall which consists of 3 courts. One of them is reserved for CPA students.Anyone wants to play there has to sign in register that's available on reception and can play for an hour in a slot.
         It has a T.T. Hall which has 8 tables.
         It has a Squash Hall which consist of 2 courts. One can take squash-racket and ball from reception by showing Institute ID-card.
         It has a Yoga/Aerobics hall.Anyone who wants to join Yoga classes must get membership.Membership form can be collected from Reception.
         It has a Billiards-Hall which consists of 7 tables. To play billiards one requires membership.
         It has a Gymnasium.Anyone who wants to use this facility must get membership. There are 2 slots 7 AM to 8 AM and 6PM to 7PM are reserved for females. Others are open to all.
</p> 
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
 <NewsacSlideShow/>
</div>
  );
}

export default NS_APP;
