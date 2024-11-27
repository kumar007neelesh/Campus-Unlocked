import React from "react";

const events = [
  {
    id: 1,
    title: "Event 1",
    date: "2023-03-21",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Event 2",
    date: "2023-03-20",
    time: "2:30 PM"
  },
  {
    id: 3,
    title: "Event 3",
    date: "2023-03-22",
    time: "7:00 PM"
  },
  {
    id: 4,
    title: "Event 4",
    date: "2023-03-16",
    time: "11:00 AM"
  },
];

const EventsByDate = () => {
  const today = new Date().toISOString().slice(0, 10);
  const twoDaysFromNow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const upcomingEvents = events.filter(
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

export default EventsByDate;
