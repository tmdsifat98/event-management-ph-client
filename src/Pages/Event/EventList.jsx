import React, { useEffect, useState } from "react";
import NoData from "../../Components/NoData";
import useAuth from "../../hooks/useAuth";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const EventList = ({ events, loading }) => {
  const { user } = useAuth();
  const axiosLocal = useAxiosLocal();
  const [updatedEvent, setUpdatedEvents] = useState([]);

  useEffect(() => {
    setUpdatedEvents(events);
  }, [events]);

  const handleJoin = async (id) => {
    const userEmail = user?.email;
    if (!userEmail) {
      alert("Please login to join the event.");
      return;
    }
    axiosLocal
      .patch(`/events/${id}/join`, { userEmail })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully joined the event",
            showConfirmButton: false,
            timer: 1500,
          });
          setUpdatedEvents((prevEvents) =>
            prevEvents.map((event) =>
              event._id === id
                ? { ...event, attendeeCount: event.attendeeCount + 1 }
                : event
            )
          );
        } else if (res.data.modifiedCount === 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You have already joined this event",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:w-5/6 mx-auto min-h-[calc(100vh-322px)] dark:text-white">
      {loading ? (
        <div className="mb-24">
          <Loader h="true" />
        </div>
      ) : updatedEvent.length < 1 ? (
        <NoData message="No events available with your search" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {updatedEvent.map((event) => (
            <Fade key={event._id}>
              <div className="border rounded-lg p-4 shadow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {event.eventTitle}
                </h2>
                <p className="text-sm text-gray-500">
                  Posted by{" "}
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {event.userName}
                  </span>
                </p>
                <p className="text-sm text-gray-500 my-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Attendees:{" "}
                    <strong>
                      {String(event.attendeeCount).padStart(2, "0")}
                    </strong>
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
                <div className="text-gray-700 dark:text-gray-300 pl-3 mb-4">
                  <span className=" line-clamp-3">
                    {event.eventDescription}
                  </span>
                  <button>view more</button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Link to={`${event._id}`} className="btn btn-accent">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleJoin(event._id)}
                    className="btn btn-primary"
                  >
                    Join Event
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
