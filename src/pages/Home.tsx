import "./animations.css";
import Intro from "../components/Intro";
import ExpEduTabs from "../components/ExpEduTabs";

const Home = () => {
  return (
    <div className="w-3/5 flex flex-col border-0 border-white gap-8">
      <div className="w-full h-1/2 border-0 border-blue-500">
        <Intro />
      </div>

      <div className="border border-white">
        <ExpEduTabs />
      </div>
    </div>
  );
};

export default Home;
