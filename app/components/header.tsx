import { NavLink } from "react-router";
import Logo from "./logo";

const navList = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Users", path: "/users" },
];

const Header = () => {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
        <Logo size="medium" color="black" className="flex items-center" />
        <nav className="flex space-x-4">
          {navList.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "text-amber-700" : "",
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-500",
                  isTransitioning ? "text-red-500" : "",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
