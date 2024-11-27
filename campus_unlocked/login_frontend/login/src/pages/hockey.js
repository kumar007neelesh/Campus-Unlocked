import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';

// import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HockeySlideShow from '../fecth/hockeyfetch';

const Example = () => {
    const images = [
        "https://www.iitk.ac.in/new/images/large-images/hockey-club/hockey-team-2.jpg",
        "https://lh5.googleusercontent.com/p/AF1QipMACIYwK-gw00KmWO5Q_gMDGpgtS_WyummH-pFt=w408-h305-k-no",
        "https://www.iitk.ac.in/pes/images/cards/hockey-and-football-ground.jpg",
        "https://lh5.googleusercontent.com/p/AF1QipMuT7Rs8NQv1O8SZEnGiQ0PkYRKqDol11i-NLvY=w1080-k-no",
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

function Hock_APP() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Hockey Ground</h1>
      <br/>
      <Example /> 
      <p> IIT Kanpur has a hockey ground that is primarily used for playing field hockey. The ground is located within the campus and is easily accessible for students and staff members.

The hockey ground at IIT Kanpur is a well-maintained grass field with dimensions that meet the international standards for field hockey. The ground is surrounded by a boundary line, and there are two goal posts on each end. The surface of the field is even and well-kept, providing a smooth playing experience for the players.

The hockey ground is equipped with all the necessary facilities, such as changing rooms and washrooms, to ensure that the players can comfortably prepare for their matches. The ground also has seating arrangements for spectators who come to watch the matches.

Apart from regular practice sessions and matches, the hockey ground is also used for hosting inter-college and intra-college tournaments. It is a popular spot for hockey enthusiasts on the campus, and many students take part in the various tournaments and competitions that are organized on the ground.

In conclusion, the hockey ground of IIT Kanpur is a well-maintained and fully equipped facility that provides an excellent venue for playing field hockey and hosting hockey tournaments.
      
    </p>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
     <HockeySlideShow/>
    </div>
  );
}

export default Hock_APP;
