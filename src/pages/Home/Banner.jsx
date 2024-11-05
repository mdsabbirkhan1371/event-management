import speaker1 from "../../../public/assets/small-pic/sb-speaker1.png";
import speaker2 from "../../../public/assets/small-pic/sb-speaker2.png";
import speaker3 from "../../../public/assets/small-pic/sb-speaker3.png";
import speaker4 from "../../../public/assets/small-pic/sb-speaker4.png";
import speaker5 from "../../../public/assets/small-pic/sb-speaker5.png";
import MySwiper from "../MySwiper/MySwiper";

const Banner = () => {
  const style = {
    backgroundColor: "indigo",
  };

  return (
    <div style={style} className="p-5 lg:relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Speaker Images Section */}
        <div className="flex flex-row md:flex-col md:space-y-3 space-x-3 items-center justify-center md:justify-start">
          <img src={speaker1} alt="Speaker 1" className="w-20 h-auto" />
          <img src={speaker2} alt="Speaker 2" className="w-20 h-auto" />
          <img src={speaker3} alt="Speaker 3" className="w-20 h-auto" />
          <img src={speaker4} alt="Speaker 4" className="w-20 h-auto" />
          <img src={speaker5} alt="Speaker 5" className="w-20 h-auto" />
        </div>

        {/* Swiper Section */}
        <div className="col-span-1 md:col-span-2 mt-6 md:mt-0">
          <MySwiper />
        </div>
      </div>

      {/* Optional Search Inputs */}
      {/* 
      <div className="bg-white md:w-3/4 p-5 mx-auto lg:absolute bottom-12 right-48">
        <div className="text-center space-x-2 sm:space-y-2">
          <input
            type="text"
            placeholder="Event Location...."
            className="input input-bordered input-md rounded-full max-w-xs"
          />
          <input
            type="date"
            placeholder="Date"
            className="input input-bordered input-md rounded-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Category"
            className="input input-bordered input-md rounded-full max-w-xs"
          />
          <button className="btn btn-active bg-red-700 px-20 rounded-full">
            Search
          </button>
        </div>
      </div>
      */}
    </div>
  );
};

export default Banner;
