import React, { useEffect, useState } from "react";
import EventSearch from "./EventSearch";
import EventList from "./EventList";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
    document.title = "Events";
  }, []);


  return (
    <div className="p-4">
      <h1 className="text-5xl text-center font-bold font-playfair mb-5 dark:text-white">All Events</h1>
      <EventSearch setEvents={setEvents} setLoading={setLoading} />
      <EventList events={events} loading={loading} />
    </div>
  );
};

export default EventPage;
