import chair from "../../../assets/images/chair.png";
import bgChair from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      style={{ backgroundImage: `url(${bgChair})`, backgroundSize: "cover" }}
    >
      <div className="hero p-16">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={chair}
            alt=""
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mr-4">
            <DayPicker
              className=""
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
