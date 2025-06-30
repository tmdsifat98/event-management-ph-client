import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import UpdateModal from "../Components/UpdateModal";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const MyEvent = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/events/user/${user.email}`).then((res) => {
        setEvents(res.data);
        setLoading(false);
      });
    }
  }, [user]);

  if (loading) return <Loader h="true" />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/events/${id}`);
        setEvents(events.filter((e) => e._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const openUpdateModal = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="md:w-9/12 mx-auto min-h-[calc(100vh-335px)] dark:text-white">
      <h1 className="text-5xl text-center font-bold font-playfair mt-3 mb-5">
        My Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded shadow">
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
                         <p className="text-gray-700 dark:text-gray-300 pl-3 mb-4 line-clamp-3">
                           {event.eventDescription}
                         </p>
            <p>Attendees: {event.attendeeCount}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => openUpdateModal(event)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(event._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {selectedEvent && (
          <UpdateModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onUpdate={(updatedEvent) => {
              setEvents(
                events.map((e) =>
                  e._id === updatedEvent._id ? updatedEvent : e
                )
              );
              setSelectedEvent(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MyEvent;
