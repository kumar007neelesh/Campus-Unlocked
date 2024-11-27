import React from "react";
// import Events from "./components/Events";
// import Header from "./components/header";
// import Top from "./components/menu";
// import {FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Top from "./Header";
import "../news.css";
import { useEffect, useState } from 'react';


function Header() {
  return (
    <div>

      <div className = "h1_news">
        <h1>NEWSLETTER</h1>
      </div>
    </div>
  );
}
const events_e = [
  {
    id: 1,
    title: "CS253 Presentation",
    date: "2023-04-21",
    time: "10:30 AM"
  },
  {
    id: 2,
    title: "IPL Screening",
    date: "2023-04-21",
    time: "7:30 PM"
  },
  {
    id: 3,
    title: "CS203 Assignment Deadline",
    date: "2023-04-22",
    time: "12:00 AM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-03-16",
    time: "11:00 AM"
  },
];

const events_a = [
  {
    id: 1,
    title: "CS253 Presentation",
    date: "2023-02-21",
    time: "10:30 AM"
  },
  {
    id: 2,
    title: "IPL Screening",
    date: "2023-02-21",
    time: "7:30 PM"
  },
  {
    id: 3,
    title: "CS203 Assignment Deadline",
    date: "2023-02-22",
    time: "12:00 AM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-02-16",
    time: "11:00 AM"
  },
];
const events_t = [
  {
    id: 1,
    title: "CS253 Presentation",
    date: "2023-02-21",
    time: "10:30 AM"
  },
  {
    id: 2,
    title: "IPL Screening",
    date: "2023-02-21",
    time: "7:30 PM"
  },
  {
    id: 3,
    title: "CS203 Assignment Deadline",
    date: "2023-02-22",
    time: "12:00 AM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-02-16",
    time: "11:00 AM"
  },
];
const events_u = [
  {
    id: 1,
    title: "CS253 Presentation",
    date: "2023-02-21",
    time: "10:30 AM"
  },
  {
    id: 2,
    title: "IPL Screening",
    date: "2023-02-21",
    time: "7:30 PM"
  },
  {
    id: 3,
    title: "CS203 Assignment Deadline",
    date: "2023-02-22",
    time: "12:00 AM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-02-16",
    time: "11:00 AM"
  },
];

const EventsByDate_A = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const upcomingEvents = events_a.filter(
    (event) => event.date >= today && event.date <= twoDaysFromNow
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? (
        <p>No upcoming events in the next 2 days.</p>
      ) : (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <h3>{event.date}</h3>
              <p>{event.title} - {event.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EventsByDate_U = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const upcomingEvents = events_u.filter(
    (event) => event.date >= today && event.date <= twoDaysFromNow
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? (
        <p>No upcoming events in the next 2 days.</p>
      ) : (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <h3>{event.date}</h3>
              <p>{event.title} - {event.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EventsByDate_T = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const upcomingEvents = events_t.filter(
    (event) => event.date >= today && event.date <= twoDaysFromNow
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? (
        <p>No upcoming events in the next 2 days.</p>
      ) : (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <h3>{event.date}</h3>
              <p>{event.title} - {event.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const EventsByDate_E = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const upcomingEvents = events_e.filter(
    (event) => event.date >= today && event.date <= twoDaysFromNow
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length === 0 ? (
        <p>No upcoming events in the next 2 days.</p>
      ) : (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <h3>{event.date}</h3>
              <p>{event.title} - {event.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
function Events() {
    const [token, setToken] = useState(localStorage.getItem('token'));
  
    useEffect(() => {
      setToken(localStorage.getItem('token'));
    }, []);
  return (
    <><div className="row_news">
      <Link to="https://www.antaragni.in/" className="column_news">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Antaragni_Generic_Logo.png" alt="Image 1" className="r" />
        <p>Antaragni</p>
        <EventsByDate_A />
      </Link>
      <Link to="https://udghosh.org.in/" className="column_news">
        <img src="https://udghosh.org.in/images/logo.png" alt="Image 2" className="r" />
        <p>Udghosh</p>
        <EventsByDate_U />
      </Link>
      <Link to="https://techkriti.org/" className="column_news">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Techkriti_logo.png" alt="Image 3" className="r" />
        <p>Techkriti</p>
        <EventsByDate_T />
      </Link>
      {token !== null && (
        <div className="column_news">
          <img src="https://iitk.ac.in/dora/givingback/assets/img/lib.jpg" alt="Image 3" className="r" />
          <p>Events</p>
          <EventsByDate_E />
        </div>
      )}
    </div></>
  );
}


function News() {
  return (
    <div >
      <Top/>
      <Header />
      <Events />
    </div>
    // </div>
  );
}

export default News

