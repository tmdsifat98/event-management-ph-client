import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../../Components/Loader";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosLocal = useAxiosLocal();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axiosLocal.get(`/events/${id}`).then((res) => {
      setEvent(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleJoin = async (id) => {
    const userEmail = user?.email;
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
          setEvent((prev) => ({
            ...prev,
            attendeeCount: prev.attendeeCount + 1,
          }));
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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-7 border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Programming Hero Hackathon
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between my-4">
            <p className="text-gray-600 dark:text-gray-400">
              Posted by: <span className="font-medium">{event.userName}</span>
            </p>
            <div className="text-gray-500 text-sm flex gap-2">
              <div>
                <strong>Created:</strong>
              </div>{" "}
              <div>
                {" "}
                <p>
                  {" "}
                  Date:
                  {new Date(event.createdAt).toLocaleString().split(",")[0]}
                </p>
                <p>
                  {" "}
                  Time:
                  {new Date(event.createdAt).toLocaleString().split(",")[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start text-gray-600 dark:text-gray-300 text-sm mb-2">
            <FaCalendarAlt />
            <div>
              <p>
                <strong>Event date:</strong>{" "}
                {new Date(event.dateAndTime).toLocaleString().split(",")[0]}
              </p>
              <p>
                <strong> Event time:</strong>{" "}
                {new Date(event.dateAndTime).toLocaleString().split(",")[1]}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
            <FaLocationDot />
            <span>{event.eventLocation}</span>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {event.eventDescription}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              Attendees: <strong>{event.attendeeCount}</strong>
            </span>
            <button
              onClick={() => handleJoin(id)}
              className="btn btn-primary cursor-pointer"
            >
              Join Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
