import { useLoaderData, useParams } from 'react-router-dom';
import { MdEventSeat, MdOutlineDateRange } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const BookingCard = () => {
  const events = useLoaderData();
  const { id } = useParams();

  const { loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="text-5xl text-center my-48">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading  loading-infinity"></span>
      </div>
    );
  }

  const event = events.find(event => event.id == id);

  const handleBooking = () => {
    toast('Your Booking has been Submit');
  };
  return (
    <div>
      <h2 className="text-center text-3xl my-12 font-bold">
        Your Booking Details
      </h2>

      <div className="card w-96 bg-base-100 shadow-xl font-semibold mx-auto mb-24">
        <figure>
          <img
            className="relative rounded-x-lg mx-auto"
            src={event.img}
            alt="Shoes"
          />
        </figure>

        <h3 className="bg-red-700 w-full p-4 rounded-b-lg absolute bottom-40 left-0 flex items-center font-medium">
          <MdEventSeat className="mr-2"></MdEventSeat> Seat {event.seat}
        </h3>

        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <MdOutlineDateRange />
              <h4 className="ml-2">{event.date}</h4>
            </div>

            <div className="flex items-center">
              <CiLocationOn />
              <h4 className="ml-2">{event.address}</h4>
            </div>
          </div>
          <h2 className="card-title">{event.title}</h2>

          <div className="card-actions">
            <button
              onClick={handleBooking}
              className=" mt-3 text-cyan-800 btn w-full hover:text-red-700 font-bold"
            >
              Book Now
            </button>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default BookingCard;
