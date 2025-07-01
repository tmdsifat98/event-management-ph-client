import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const Organizer = () => {
  const [organizers, setOrganizers] = useState([]);
  useEffect(() => {
    fetch("/organizer.json")
      .then((res) => res.json())
      .then((data) => setOrganizers(data));
  }, []);

  return (
    <Fade>
      <div className="w-full lg:w-3/4 mx-auto px-4 mb-8 mt-16">
        <h1 className="text-center text-5xl font-bold my-5 font-playfair dark:text-white">
          Our Popular Organizers
        </h1>
        <p className="flex items-center justify-center mb-3 text-2xl text-primary">
          <IoIosArrowBack /> swipe to see more <IoIosArrowForward />
        </p>
        <Swiper
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {organizers.map((organizer) => (
            <SwiperSlide key={organizer.id}>
              <div className="bg-white dark:bg-gray-800 border-2 pb-7 border-gray-500 shadow-md rounded-xl overflow-hidden p-4 text-center">
                <img
                  src={organizer.photo}
                  alt={organizer.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h2 className="text-lg font-semibold dark:text-gray-100">
                  {organizer.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Event Organized: {organizer.events_organized}
                </p>
                <p className="text-yellow-500 flex gap-1 items-center justify-center">
                  Rating: {organizer.rating} <FaStar />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default Organizer;
