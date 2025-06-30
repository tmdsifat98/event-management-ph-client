import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const Marquiee = () => {
  const axiosLocal = useAxiosLocal();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axiosLocal.get("/events").then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false} direction="left" >
      {events.map((event) => (
        <p className="ml-10 py-6">| {event.eventTitle} ({new Date(event.dateAndTime).toLocaleString()}) at {event.eventLocation} |</p>
      ))}
    </Marquee>
  );
};

export default Marquiee;
