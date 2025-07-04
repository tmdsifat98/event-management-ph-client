import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosLocal from "../hooks/useAxiosLocal";
import { Fade } from "react-awesome-reveal";

const AddEvent = () => {
  const { user } = useAuth();
  const axiosLocal = useAxiosLocal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const eventdata = {
      ...data,
      createdAt: new Date().toISOString(),
      userEmail: user.email,
      userName: user.name,
      attendeeCount: 0,
      attendee: [],
    };

    axiosLocal
      .post("/events", eventdata)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.title = "Add Events";
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-event pt-12">
      <Fade>
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded w-11/12 lg:w-1/3 mx-auto">
          <h2 className="text-5xl text-white font-bold pt-5 mb-9 text-center font-playfair">
            Add Event
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-100 ">
                Event Title
              </label>
              <input
                type="text"
                name="eventTitle"
                placeholder="Event Title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white  text-black  focus:outline-none "
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                User name
              </label>
              <input
                value={user.name}
                readOnly
                className="w-full px-4 py-2 border border-gray-300  rounded-lg bg-white text-black focus:outline-none "
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-100 ">
                Event Date and time
              </label>
              <input
                type="datetime-local"
                name="dateAndTime"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm bg-white  text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-100">
                Event Location
              </label>
              <input
                type="text"
                name="eventLocation"
                placeholder="Event Location"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white  text-black focus:outline-none "
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-300">
                Event Description
              </label>
              <textarea
                name="eventDescription"
                placeholder="Event description"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white  text-black focus:outline-none "
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Add Event
            </button>
          </form>
        </div>  
      </Fade>
    </div>
  );
};

export default AddEvent;
