import { useEffect, useState } from "react";
import SingleSpeaker from "./SingleSpeaker";

const Speaker = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("speaker.json")
      .then((res) => res.json())
      .then((data) => setSpeakers(data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold my-12">VALUABLE PERSON</h2>
      <hr className="border-t-2 border-gray-300 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakers.map((speaker) => (
          <SingleSpeaker key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speaker;
