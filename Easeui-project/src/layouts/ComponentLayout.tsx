import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  return (
    <div className="flex min-h-screen bg-white text-gray-900 dark:bg-[#111113] dark:text-gray-100">
      <aside
        className={`
          w-64 p-6 flex flex-col
          bg-white dark:bg-[#111113]
          border-r border-gray-200 dark:border-gray-800
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:translate-x-0
        `}
      >
        <h2 className="text-md font-bold mb-6 text-gray-900 dark:text-white">
          Components
        </h2>

        <ul className="flex flex-col gap-2">
          {components.map((item) => {
            const isActive =
              location.pathname ===
              `/components/${item.toLowerCase()}`;

            return (
              <li
                onClick={() => navigate(item.toLowerCase())}
                key={item}
                className={`
                  cursor-pointer text-md
                  transition-all duration-200 ease-in-out
                  hover:translate-x-1
                  ${
                    isActive
                      ? "text-gray-900 dark:text-white font-medium"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
                  }
                `}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="flex-1 ml-10 overflow-auto h-screen p-6">
        <button
          className="md:hidden mb-4 text-gray-700 dark:text-gray-300"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;