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
    <div>
      <div style={style} className="p-5 lg:relative">
        <div className="">
          <div className="p-12 space-y-5">
            <img src={speaker1} alt="" className="w-24 h-auto" />
            <img src={speaker2} alt="" className="w-24 h-auto" />
            <img src={speaker3} alt="" className="w-24 h-auto" />
            <img src={speaker4} alt="" className="w-24 h-auto" />
            <img src={speaker5} alt="" className="w-24 h-auto" />
          </div>

          <div className="">
            <MySwiper />
          </div>
        </div>
      </div>

      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Banner;
