import { Outlet, NavLink } from "react-router-dom";

const links = [
  { link: "/", name: "Home" },
  { link: "/experience", name: "Experience" },
  { link: "/projects", name: "Projects" },
];

const Layout = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black">
      <div className="absolute w-[100%] flex justify-center mt-4 rounded-xl bg-black">
        <nav className="flex gap-4 my-2 mx-4">
          {links.map((link) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  `text-center font-semibold py-2 px-4 rounded-lg hover:shadow-[0_0_3em_#646cff] transition-all border ${
                    isActive
                      ? "scale-105 border-[#646cff] bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text"
                      : "border-transparent text-gray-200"
                  }`
                }
                to={link.link}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="w-[100%] h-[100%] pt-24 flex justify-center text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
