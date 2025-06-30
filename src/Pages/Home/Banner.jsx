import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        speed={900}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full banner-bg-1 h-96 flex justify-center items-center lg:h-[600px]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl font-playfair mb-7 lg:mb-5 text-center">
                Discover and Join Exciting Events
              </h2>
              <p className="text-gray-200 w-3/4 mx-auto mb-6 font-normal lg:font-semibold">
                Explore a wide variety of events happening near you. From
                workshops to festivals, find something that inspires you and
                connect with amazing people.
              </p>
              <Link to="/events">
                <button className="btn btn-primary">All Events</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-2 h-96 flex justify-center items-center lg:h-[600px]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl font-playfair mb-7 lg:mb-5 text-center">
                Create Your Own Event Today
              </h2>
              <p className="text-gray-200 w-3/4 mb-6 mx-auto font-normal lg:font-semibold">
                Host your own events effortlessly. Share your ideas, invite
                attendees, and make your event a memorable experience for
                everyone.
              </p>
              <Link to="/addEvents">
                <button className="btn btn-primary">Create Event</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-3 h-96 flex justify-center items-center lg:h-[600px]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl mb-5 font-playfair lg:mb-5 text-center">
                Stay Updated with Upcoming Events
              </h2>
              <p className="text-gray-200 w-3/4 mx-auto font-normal lg:font-semibold mb-6">
                Never miss out on opportunities. Keep track of the latest
                events, manage your participation, and stay engaged with your
                favorite communities.
              </p>
              <a href="#featuredEvents">
                {" "}
                <button className="btn btn-primary">Connect with us</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
