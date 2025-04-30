import "./animations.css";
import locationIcon from "../assets/location-icon.png";

const Home = () => {
  return (
    <div className="w-3/5 flex flex-col border-0 border-white">
      <div className="w-full h-1/2 flex justify-between border-0 border-red-500">
        <div className="w-1/2 h-full flex justify-end">
          <div className="w-2/3 h-full flex flex-col justify-center gap-6 border-0 border-white">
            <div className="flex items-center gap-8 border-0 border-white">
              <h1 className="font-mono text-2xl border-0 border-white">
                hi i'm Erik
              </h1>
              <div className="text-6xl transform origin-bottom rotate-[-40deg] translate-y-[-10px] hover:animate-wave cursor-default border-0 border-red-500">
                ✋🏼
              </div>
            </div>
            <div className="font-mono text-lg">Full Stack Developer</div>
            <div className="font-mono text-lg flex items-center gap-2">
              <img src={locationIcon} className="w-5 h-5" />
              NC, USA
            </div>
            <div className="font-mono text-lg">Icons</div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center gap-8 border border-blue-400">
          {/* Image */}
          <div className="w-lg h-3/4 bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
