import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosLocal from "../hooks/useAxiosLocal";
import axios from "axios";
import Swal from "sweetalert2";

const Events = () => {
  const { user } = useAuth();
  const axiosLocal = useAxiosLocal();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosLocal.get("/events").then((res) => {
      setEvents(res.data);
      setLoading(false);
    });
  }, []);

  const handleJoin = async (id) => {
    const userEmail = user?.email;
    if (!userEmail) {
      alert("Please login to join the event.");
      return;
    }
    axios
      .patch(`http://localhost:3000/events/${id}/join`, { userEmail })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully joined the event",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (res.data.modifiedCount === 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You have already joined the event",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event) => (
        <div key={event._id} className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold">{event.eventTitle}</h2>
          <p className="text-gray-600">Posted by: {event.userName}</p>
          <p>Date & Time: {event.dateAndTime}</p>
          <p>Location: {event.eventLocation}</p>
          <p className="mt-2">{event.eventDescription}</p>
          <p className="mt-1">Attendees: {event.attendeeCount}</p>
          <button
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleJoin(event._id)}
          >
            Join Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default Events;
