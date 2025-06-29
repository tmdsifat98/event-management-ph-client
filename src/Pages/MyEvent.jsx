import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../Components/Loader";
import Swal from "sweetalert2";
import UpdateModal from "../Components/UpdateModal";

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
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/events/${id}`);
        setEvents(events.filter((e) => e._id !== id));

        Swal.fire("Deleted!", "Your event has been deleted.", "success");
      }
    });
  };

  const openUpdateModal = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{event.eventTitle}</h2>
            <p>Posted by: {event.userName}</p>
            <p>Date & Time: {new Date(event.dateAndTime).toLocaleString()}</p>
            <p>Location: {event.eventLocation}</p>
            <p>{event.eventDescription}</p>
            <p>Attendees: {event.atendeeCount}</p>
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
