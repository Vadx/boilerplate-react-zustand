import { Outlet } from "react-router";
import Header from "../header";
import Footer from "../footer";

const LayoutPublic = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <Header />
      <div className="flex flex-col w-full bg-gray-100 flex-1 px-3 py-6 md:px-6 md:py-8 dark:bg-gray-900">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
