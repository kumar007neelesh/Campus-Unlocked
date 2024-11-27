import './oat.css';
import Top from './header_page';
// import Example from './components/gallery';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AudiSlideShow from '../fecth/auditorium';

const Example = () => {
    const images = [
        "https://iitk.ac.in/vh/images/gallery/Main-Auditorium/Main-Auditorium.jpg",
        "https://images.jdmagicbox.com/comp/kanpur/n5/0512px512.x512.171201173312.l9n5/catalogue/csjm-university-auditorium-kalyanpur-kanpur-auditoriums-d1ymjn3hos.jpg",
        "https://home.iitk.ac.in/~bms/images/iitk/AUDI-IN.JPG",
        "https://iitk.ac.in/vh/images/gallery/Main-Auditorium/Main-Auditorium-1.jpg",
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


function Audi_App() {

  return (
    <div className="App">
      <Top/>
      <br/>
      <h1 className="pages_h1">Auditorium</h1>
      <br/>
      <Example /> 
      <p>The auditorium of IIT Kanpur is a modern and well-equipped facility located on the institute's campus. The auditorium has a seating capacity of around 1,500 people and is used for various events and functions, including cultural programs, seminars, conferences, and other academic events.

The auditorium has a spacious stage with modern lighting and sound systems, making it an ideal venue for musical and theatrical performances. The seating arrangements are comfortable and provide clear views of the stage from all angles. The auditorium also has air conditioning, ensuring that the temperature inside the auditorium remains comfortable even during hot summers.

The auditorium is equipped with modern audio-visual equipment, including a high-quality projector and screen, making it suitable for presentations, lectures, and other academic events. There are also separate soundproof rooms for interpreters and speakers, which can be used during events with international speakers or delegates.

Apart from the main auditorium, there are also smaller conference rooms and seminar halls located within the same building, making it a comprehensive facility for hosting various academic and cultural events.

Overall, the auditorium of IIT Kanpur is a modern and well-equipped facility that provides an excellent venue for hosting various events and functions. The spacious stage, comfortable seating, and state-of-the-art audio-visual equipment make it an ideal venue for cultural programs, seminars, conferences, and other academic events.</p>
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="h2_pages">Campus Community Posts</h2>
    <br/>
      <AudiSlideShow/>
    </div>
  );
}

export default Audi_App;
