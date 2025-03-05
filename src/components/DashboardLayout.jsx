import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-64">
        <Navbar />
        <div className="p-6 mt-16">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;