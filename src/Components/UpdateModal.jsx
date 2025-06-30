import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosLocal from "../hooks/useAxiosLocal";

const UpdateModal = ({ event, onClose, onUpdate }) => {
  const axiosLocal = useAxiosLocal()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

      axiosLocal.patch(`/events/${event._id}`, data);

      Swal.fire("Updated!", "Your event has been updated.", "success");

      const updatedEvent = {
        ...event,
        ...data,
      };
      onUpdate(updatedEvent);

  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded shadow max-w-lg w-full relative">
        <button type="button" onClick={onClose} className="absolute top-3 right-3 cursor-pointer hover:text-red-600">
          <RxCross2 size={23}/>
        </button>
        <h2 className="text-xl font-bold mb-4">Update Event</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Event Title</label>
            <input
              type="text"
              name="eventTitle"
              defaultValue={event.eventTitle}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Date and Time</label>
            <input
              type="datetime-local"
              name="dateAndTime"
              defaultValue={event.dateAndTime?.slice(0, 16)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Location</label>
            <input
              type="text"
              name="eventLocation"
              defaultValue={event.eventLocation}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="eventDescription"
              defaultValue={event.eventDescription}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
