import { Outlet } from "react-router";
import Header from "../header";

const LayoutWrap = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
 
export default LayoutWrap;