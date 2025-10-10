import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { fetchAttendees } from "../api/data";
import Cookies from "js-cookie";
import { useNavigate, useSearchParams } from "react-router";

const Attendees = () => {
  const [count, setCount] = useState(0);
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  let token;
  try {
    const cookieToken = Cookies.get("token");
    if (cookieToken) token = cookieToken;
  } catch (error) {
    console.error("Error reading token:", error);
  }

  useEffect(() => {
     setLoading(true);
    if (!token) return;
   

    fetchAttendees(token)
      .then((res) => {
        const data = res.data?.data?.attendees || [];
        setAttendees(data);
        setFilteredAttendees(data);
        setCount(res?.data?.count || data.length);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [token]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    let filtered = attendees;

    if (selectType !== "all") {
      filtered = filtered.filter(
        (attendee) => attendee.type.toLowerCase() === selectType.toLowerCase()
      );
    }

    if (query.trim()) {
      filtered = filtered.filter(
        (attendee) =>
          attendee.fullName.toLowerCase().includes(query) ||
          attendee.email.toLowerCase().includes(query) ||
          attendee.organisation.toLowerCase().includes(query) ||
          String(attendee.phoneNumber).includes(query)
      );
    }

    setCount(filtered.length);
    setFilteredAttendees(filtered);
  };

  const handleType = (type) => {
    setSelectType(type);
    setSearchParams({ type }); // updates URL query

    if (type === "all") {
      setFilteredAttendees(attendees);
      setCount(attendees.length);
    } else {
      const filtered = attendees.filter(
        (attendee) => attendee.type.toLowerCase() === type
      );
      setFilteredAttendees(filtered);
      setCount(filtered.length);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div>
      <div className="border-[1px] border-[#EAEAEA] rounded-[8px] p-[24px] bg-[#fff] min-h-[70vh]">
        <div className="flex justify-between mb-[24px]">
          <h2 className="font-medium text-[20px] text-[#121927] leading-[30px] tracking-[3%]">
            Attendees ({count})
          </h2>

          <div className="relative h-[44px] w-[346px] border-[1px] border-[#D0D5DD] rounded-[8px] text-[#667085]">
            <CiSearch className="absolute top-[30%] left-[8px] text-[20px]" />
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={search}
              onChange={handleSearch}
              className="w-[100%] h-[100%] pl-[32px] font-regular text-[16px] leading-[24px] tracking-[0] border-[#D0D5DD] outline-[0]"
            />
          </div>

          <div className="flex items-center justify-center gap-5 h-[44px] w-[104px] border-[1px] border-[#D0D5DD] rounded-[8px] text-[#667085] cursor-pointer">
            <select
              className="bg-transparent outline-none border-none cursor-pointer"
              value={selectType}
              onChange={(e) => handleType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
            <div className="w-10 h-10 border-4 border-t-[#2C7BE5] border-gray-200 rounded-full animate-spin mb-3"></div>
            <p className="text-[16px]">Loading attendees...</p>
          </div>
        ) : filteredAttendees.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No attendees found.</p>
        ) : (
          <div className="w-[100%] overflow-x-auto">
            <table className="w-[100%]">
              <thead className="font-medium bg-[#F9FBFA] border-b-[0.4px] border-b-[#EAECF0] text-[#667085] text-[12px] leading-[18px]">
                <tr>
                  <th className="py-[13px]">Full Name</th>
                  <th className="py-[13px]">Email</th>
                  <th className="py-[13px]">Organization</th>
                  <th className="py-[13px]">Phone Number</th>
                  <th className="py-[13px]">Social Media</th>
                  <th className="py-[13px]">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredAttendees.map((user) => (
                  <tr
                    key={user._id}
                    className="text-center text-[#101828] text-[14px] leading-[16.8px] tracking-[0] font-regular border-b-[#EAECF0] border-b-[1px] hover:bg-gray-50 transition"
                  >
                    <td
                      className="py-[13px] cursor-pointer"
                      onClick={() =>
                        navigate(`/sponsor-details?user=${user._id}`)
                      }
                    >
                      {user.fullName}
                    </td>
                    <td
                      className="py-[13px] cursor-pointer"
                      onClick={() =>
                        navigate(`/sponsor-details?user=${user._id}`)
                      }
                    >
                      {user.email}
                    </td>
                    <td
                      className="py-[13px] cursor-pointer"
                      onClick={() =>
                        navigate(`/sponsor-details?user=${user._id}`)
                      }
                    >
                      {user.organisation}
                    </td>
                    <td
                      className="py-[13px] cursor-pointer"
                      onClick={() =>
                        navigate(`/sponsor-details?user=${user._id}`)
                      }
                    >
                      {user.phoneNumber}
                    </td>
                    <td className="flex justify-center text-[24px] items-center gap-[12px] py-[13px]">
                      {user.instagramLink && (
                        <a
                          href={user.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}
                      {user.twitterLink && (
                        <a
                          href={user.twitterLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                    </td>
                    <td>{formatDate(user.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendees;
