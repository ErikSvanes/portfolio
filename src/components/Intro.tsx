import locationIcon from "../assets/location-icon.png";
// import githubIcon from "../assets/github-icon-256x249.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import resume from "/ErikSvanes_Resume.pdf";
import downloadIcon from "../assets/download-icon.png";

const Intro = () => {
  return (
    <div className="w-full h-full flex justify-between border-0 border-red-500">
      <div className="w-1/2 h-full flex justify-end">
        <div className="w-2/3 h-full flex flex-col justify-center gap-6 border-0 border-white">
          <div className="flex items-center gap-8 border-0 border-white">
            <h1 className="font-mono text-2xl border-0 border-white">
              hi i'm Erik
            </h1>
            <div className="text-6xl translate-y-[-10px] hover:animate-wave cursor-default border-0 border-red-500">
              👋🏻
            </div>
          </div>
          <div className="font-mono text-lg">Full Stack Developer</div>
          <div className="font-mono text-lg flex items-center gap-2">
            <img src={locationIcon} className="w-5 h-5" />
            NC, USA
          </div>
          <div className="flex items-center gap-6">
            <a
              href={resume}
              download="ErikSvanes_Resume"
              className="flex items-center gap-2 py-2 px-4 rounded-lg hover:shadow-[0_0_3em_#646cff] transition-all font-mono"
            >
              Resume <img src={downloadIcon} className="w-4.5 h-6" />
            </a>
            {/* Maybe show github when contribution increases */}
            {/* <a
              href="https://github.com/ErikSvanes/"
              target="_blank"
              className="rounded-full hover:shadow-[0_0_3em_0.5em_#646cff] transition-all"
            >
              <img src={githubIcon} className="w-8 h-8" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/erik-svanes/"
              target="_blank"
              className="rounded-full hover:shadow-[0_0_3em_0.5em_#646cff] transition-all"
            >
              <img src={linkedinIcon} className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center gap-8 border border-blue-400">
        {/* Image */}
        <div className="w-lg h-3/4 bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Intro;
