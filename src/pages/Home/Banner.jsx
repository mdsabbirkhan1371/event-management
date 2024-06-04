import speaker1 from '../../../public/assets/small-pic/sb-speaker1.png';
import speaker2 from '../../../public/assets/small-pic/sb-speaker2.png';
import speaker3 from '../../../public/assets/small-pic/sb-speaker3.png';
import speaker4 from '../../../public/assets/small-pic/sb-speaker4.png';
import speaker5 from '../../../public/assets/small-pic/sb-speaker5.png';
import MySwiper from '../MySwiper/MySwiper';

const Banner = () => {
  const style = {
    // backgroundColor: "rgb(254, 202 ,202)"
    backgroundColor: 'indigo',
  };

  return (
    <div>
      <div style={style} className="p-5 lg:relative">
        <div className="grid grid-cols-1 md:grid-cols-9">
          <div className="p-12 mx-auto space-y-4">
            <img src={speaker1} alt="" />
            <img src={speaker2} alt="" />
            <img src={speaker3} alt="" />
            <img src={speaker4} alt="" />
            <img src={speaker5} alt="" />
          </div>

          <div className="col-span-8">
            <MySwiper></MySwiper>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white md:w-3/4  p-5 mx-auto lg:absolute bottom-12 right-48">
          <div className="text-center space-x-2 sm:space-y-2">
            <input
              type="text"
              placeholder="Event Location...."
              className="input input-bordered input-md rounded-full  max-w-xs"
            />
            <input
              type="date"
              placeholder="Date"
              className="input input-bordered input-md rounded-full  max-w-xs"
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
      </div>
    </div>
  );
};

export default Banner;
