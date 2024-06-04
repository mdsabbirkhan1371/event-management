const SingleSpeaker = ({ speaker }) => {
  const { name, title, img } = speaker;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="speaker" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SingleSpeaker;
