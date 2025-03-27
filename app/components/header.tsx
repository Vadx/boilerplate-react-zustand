import { NavLink } from "react-router";

const navList = [
  { name: "Home", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Users", path: "/users" },
];

const Header = () => {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
        
        <h1 className="text-xl">Boilerplate</h1>
        <nav className="flex space-x-4">
            {navList.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-500 hover:text-blue-500"
                }
              >
                {item.name}
              </NavLink>
            ))}
        </nav>
      </header>
    </div>
  );
}
 
export default Header;