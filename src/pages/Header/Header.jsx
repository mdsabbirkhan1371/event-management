import Events from "../Events/Events";
import Banner from "../Home/Banner";
import Speaker from "../Speaker/Speaker";

const Header = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-32">
        <Events></Events>
      </div>
      <Speaker></Speaker>
    </div>
  );
};

export default Header;
