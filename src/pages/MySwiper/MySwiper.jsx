// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { MdOutlineDateRange } from 'react-icons/md';
import bannerlogo from '../../../public/assets/small-pic/hero-figure1 (1).png';
import { MdEventSeat } from 'react-icons/md';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { BsPinMap } from 'react-icons/bs';

// Use the Swiper modules
const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="md:flex p-12 justify-between">
          <div>
            <div className="flex items-center text-red-700 mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">January 21,2024</h3>
            </div>
            <div className="text-4xl font-extrabold">
              <h2>EVENTS,MEETUPS & </h2>
              <h2 className="text-red-700">CONFERENCES</h2>
            </div>
            <div className="flex items-center  text-black my-3">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">500 Seat</h3>
              </div>

              <div className="flex items-center">
                <IoMegaphoneOutline className="ml-2"></IoMegaphoneOutline>
                <h3 className="m-2">10 Speaker</h3>
              </div>

              <div className="flex items-center">
                <BsPinMap className="mr-2"></BsPinMap>
                <h3 className="mr-2">1356 Broadway,New York Seat</h3>
              </div>
            </div>

            <div className="my-5">
              <button className="btn btn-outline btn-secondary mr-5 px-8">
                Book Now
              </button>
              <button className="btn btn-outline btn-secondary px-8">
                View Details
              </button>
            </div>
          </div>
          <div>
            <img src={bannerlogo} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="md:flex p-12 justify-between">
          <div>
            <div className="flex items-center text-red-700 mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">January 21,2024</h3>
            </div>
            <div className="text-4xl font-extrabold">
              <h2>EVENTS,MEETUPS & </h2>
              <h2 className="text-red-700">CONFERENCES</h2>
            </div>
            <div className="flex items-center  text-black my-3">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">500 Seat</h3>
              </div>

              <div className="flex items-center">
                <IoMegaphoneOutline className="ml-2"></IoMegaphoneOutline>
                <h3 className="m-2">10 Speaker</h3>
              </div>

              <div className="flex items-center">
                <BsPinMap className="mr-2"></BsPinMap>
                <h3 className="mr-2">1356 Broadway,New York Seat</h3>
              </div>
            </div>

            <div className="my-5">
              <button className="btn btn-outline btn-secondary mr-5 px-8">
                Book Now
              </button>
              <button className="btn btn-outline btn-secondary px-8">
                View Details
              </button>
            </div>
          </div>
          <img src={bannerlogo} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="md:flex p-12 justify-between">
          <div>
            <div className="flex items-center text-red-700 mt-20">
              <MdOutlineDateRange />
              <h3 className="ml-2 font-semibold">January 21,2024</h3>
            </div>
            <div className="text-4xl font-extrabold">
              <h2>EVENTS,MEETUPS & </h2>
              <h2 className="text-red-700">CONFERENCES</h2>
            </div>
            <div className="flex items-center  text-black my-3">
              <div className="flex items-center">
                <MdEventSeat />
                <h3 className="ml-2">500 Seat</h3>
              </div>

              <div className="flex items-center">
                <IoMegaphoneOutline className="ml-2"></IoMegaphoneOutline>
                <h3 className="m-2">10 Speaker</h3>
              </div>

              <div className="flex items-center">
                <BsPinMap className="mr-2"></BsPinMap>
                <h3 className="mr-2">1356 Broadway,New York Seat</h3>
              </div>
            </div>

            <div className="my-5">
              <button className="btn btn-outline btn-secondary mr-5 px-8">
                Book Now
              </button>
              <button className="btn btn-outline btn-secondary px-8">
                View Details
              </button>
            </div>
          </div>
          <img src={bannerlogo} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
