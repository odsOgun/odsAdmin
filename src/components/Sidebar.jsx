import { NavLink, useLocation, useNavigate } from "react-router";
import odslogo from '../assets/ods-logo.png'
import sponsor from '../assets/sponsor.png'
import exhibitor from '../assets/exhibitor.png'
import sponsorActive from '../assets/sponsor-active.png'
import exhibitorActive from '../assets/exhibitor-active.png'
import signout from '../assets/signout.png'
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { logout } = useAuth();

    const [active, setActive] = useState(location.pathname)

    const handleLogout = async () => {
     await logout()
     navigate('login')
    }
    
  return (
    <div className="w-64 h-screen bg-[#fff] p-4 fixed left-0 border-r-[1px] border-r-[#EAEAEA] top-0">
      {/* <h2 className="text-lg font-semibold text-green-600">OGUN</h2> */}
      <img src={odslogo} alt="ods logo" />
      <ul className="mt-8">
        <li>
          <NavLink
            to="/sponsors"
            onClick={() => setActive("sponsors")} 
            className={({ isActive }) => 
                `flex gap-[12px] items-center p-2 rounded font-medium text-[16px] leading-[24px] tracking-[3%] ${isActive ? "bg-[#03BE5E0D] text-[#03BE5E]" : "hover:bg-[#FFFFFF] text-[#292D32]"}`
            }
          >
            <img src={active == 'sponsors'? sponsorActive: sponsor} alt="ods logo" />
            Sponsors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exhibitors"
            onClick={() => setActive("exhibitors")} 
            className={({ isActive }) =>
              `flex gap-[12px] items-center p-2 mt-4 rounded font-medium text-[16px] leading-[24px] tracking-[3%] ${isActive ? "bg-[#03BE5E0D] text-[#03BE5E]" : "hover:bg-[#FFFFFF] text-[#292D32]"}`
            }
          >
            <img src={active == 'exhibitors'?exhibitorActive:exhibitor} alt="ods logo" />
            Exhibitors
          </NavLink>
        </li>
      </ul>
      <div className="border-t-[1px] border-t-[#EAECF0] mt-[400px]">

        <button className=" p-2 w-full text-[16px] text-[#292D32] leading-[24px] tracking-[3%] flex items-center cursor-pointer" onClick={handleLogout}>
            <img src={signout} alt="signout logo" />
            Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
