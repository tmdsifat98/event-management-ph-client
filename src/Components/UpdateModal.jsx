import axios from "axios";
import Swal from "sweetalert2";

const UpdateModal = ({ event, onClose, onUpdate }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.patch(`http://localhost:3000/events/${event._id}`, data);

      Swal.fire("Updated!", "Your event has been updated.", "success");

      const updatedEvent = {
        ...event,
        ...data,
      };

      onUpdate(updatedEvent);
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded shadow max-w-lg w-full">
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
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
