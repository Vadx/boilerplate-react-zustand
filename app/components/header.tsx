import { NavLink } from "react-router";
import Logo from "./logo";
import { ModeToggle } from "./theme-provider/mode-toggle";

const navList = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Users", path: "/users" },
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/register" },
];

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 border-b border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700">
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
      <ModeToggle />
    </header>
  );
};

export default Header;
