import { MdEventSeat } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Event.css';

const Event = ({ event }) => {
  const { title, date, address, seat, img, id, description } = event;

  return (
    <div className="card w-96 bg-base-100 shadow-xl font-semibold  hover:translate-y-10 duration-700">
      <figure>
        <img className="relative rounded-x-lg" src={img} alt="Shoes" />
      </figure>

      <h3 className="bg-red-700 w-full p-4 rounded-b-lg absolute bottom-36 left-0 flex items-center font-medium">
        <MdEventSeat className="mr-2"></MdEventSeat> Seat {seat}
      </h3>

      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <MdOutlineDateRange />
            <h4 className="ml-2">{date}</h4>
          </div>

          <div className="flex items-center">
            <CiLocationOn />
            <h4 className="ml-2">{address}</h4>
          </div>
        </div>
        <div>
          <h2 className="card-title">{title}</h2>
        </div>

        <div className="card-actions">
          <Link to={`/booking/${id}`} className="underline text-red-700">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
