import { useEffect, useState } from 'react';
import SingleSpeaker from './SingleSpeaker';

const Speaker = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch('speaker.json')
      .then(res => res.json())
      .then(data => setSpeakers(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold   my-12">
        VALUABLE PERSON
      </h2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {speakers.map(speaker => (
          <SingleSpeaker key={speaker.id} speaker={speaker}></SingleSpeaker>
        ))}
      </div>
    </div>
  );
};

export default Speaker;
