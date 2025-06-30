import React, { useEffect, useState } from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UpcomingEvents = () => {
  const axiosLocal = useAxiosLocal();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    axiosLocal
      .get("/events/search?filter=currentWeek")
      .then((res) => setUpcomingEvents(res.data));
  }, []);
  const slicedEvent = upcomingEvents.slice(0, 6);
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <h1 className="text-4xl md:text-5xl text-center font-bold font-playfair mt-3 mb-5 dark:text-white">
        Upcoming Events (in a week)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
        {slicedEvent.map((event) => (
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {event.eventTitle}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Posted by{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {event.userName}
                </span>
              </p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-2">
                <FaCalendarAlt />
                {new Date(event.dateAndTime).toLocaleString()}
              </div>
              <div className="flex gap-2 items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                <FaLocationDot />
                {event.eventLocation}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {event.eventDescription}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Attendees: <strong>{event.attendeeCount}</strong>
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors duration-200">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
