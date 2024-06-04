import { useContext } from 'react';
import Header from '../Header/Header';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
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
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Home;
