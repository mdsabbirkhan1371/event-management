// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineDateRange } from "react-icons/md";
import bannerlogo from "../../../public/assets/small-pic/hero-figure1 (1).png";
import { MdEventSeat } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BsPinMap } from "react-icons/bs";

// Use the Swiper modules
const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-12 space-y-6 md:space-y-0 bg-indigo rounded-lg shadow-lg">
          <div className="flex-1 space-y-5 text-white">
            <div className="flex items-center text-red-300 mt-5 md:mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">January 21, 2024</h3>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              <h2>EVENTS, MEETUPS &</h2>
              <h2 className="text-red-300">CONFERENCES</h2>
            </div>
            <div className="flex flex-wrap items-center space-x-4 my-3 text-white">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">500 Seats</h3>
              </div>
              <div className="flex items-center">
                <IoMegaphoneOutline />
                <h3 className="m-2">10 Speakers</h3>
              </div>
              <div className="flex items-center">
                <BsPinMap />
                <h3 className="mr-2">1356 Broadway, New York</h3>
              </div>
            </div>
            <div className="my-5 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                Book Now
              </button>
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                View Details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={bannerlogo}
              alt="Event Banner"
              className="w-full md:w-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-12 space-y-6 md:space-y-0 bg-indigo rounded-lg shadow-lg">
          <div className="flex-1 space-y-5 text-white">
            <div className="flex items-center text-red-300 mt-5 md:mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">February 12, 2024</h3>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              <h2>TECH SUMMIT</h2>
              <h2 className="text-red-300">EXPO</h2>
            </div>
            <div className="flex flex-wrap items-center space-x-4 my-3 text-white">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">800 Seats</h3>
              </div>
              <div className="flex items-center">
                <IoMegaphoneOutline />
                <h3 className="m-2">15 Speakers</h3>
              </div>
              <div className="flex items-center">
                <BsPinMap />
                <h3 className="mr-2">2560 Market St, San Francisco</h3>
              </div>
            </div>
            <div className="my-5 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                Book Now
              </button>
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                View Details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={bannerlogo}
              alt="Tech Summit Banner"
              className="w-full md:w-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-12 space-y-6 md:space-y-0 bg-indigo rounded-lg shadow-lg">
          <div className="flex-1 space-y-5 text-white">
            <div className="flex items-center text-red-300 mt-5 md:mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">March 10, 2024</h3>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
              <h2>INNOVATION &</h2>
              <h2 className="text-red-300">NETWORKING GALA</h2>
            </div>
            <div className="flex flex-wrap items-center space-x-4 my-3 text-white">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">300 Seats</h3>
              </div>
              <div className="flex items-center">
                <IoMegaphoneOutline />
                <h3 className="m-2">5 Speakers</h3>
              </div>
              <div className="flex items-center">
                <BsPinMap />
                <h3 className="mr-2">789 Park Ave, New York</h3>
              </div>
            </div>
            <div className="my-5 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                Book Now
              </button>
              <button className="btn btn-outline text-white border-white px-4 py-2 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base">
                View Details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={bannerlogo}
              alt="Networking Gala Banner"
              className="w-full md:w-auto max-w-xs md:max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
