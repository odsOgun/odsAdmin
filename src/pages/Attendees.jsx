import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Attendees = () => {
  const [count, setCount] = useState(0);
  const [attendees, setAttendees] = useState([]);
  const [filteredAttendees, setFilteredAttendees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {});

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    setSearch(query);

    if (!query.trim()) {
      setFilteredAttendees(attendees);
      return;
    }
    const filtered = attendees.filter(
      (attendee) =>
        attendee.fullName.toLowerCase().includes(query) ||
        attendee.email.toLowerCase().includes(query) ||
        attendee.organisation.toLowerCase().includes(query) ||
        String(attendee.phoneNumber).includes(query)
    );
    setCount(filtered.length);
    setFilteredAttendees(filtered);
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
              type=""
              placeholder="Search"
              name="search"
              value={search}
              className="w-[100%] h-[100%] pl-[32px] font-regular text-[16px] leading-[24px] tracking-[0] border-[#D0D5DD] outline-[0]"
              onChange={handleSearch}
            />
          </div>

          <div className=" flex items-center justify-center gap-5  h-[44px] w-[104px] border-[1px] border-[#D0D5DD] rounded-[8px] flex items-center justify-center text-[#667085] cursor-pointer">
            <select className="bg-transparent outline-none border-none cursor-pointer">
              <option value="all">All</option>
              <option value="sponsors">Paid</option>
              <option value="exhibitors">Free</option>
            </select>
          </div>
        </div>
        <div className="w-[100%]">
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
                  className="text-center text-[#101828] text-[14px] leading-[16.8px] tracking-[0] font-regular border-b-[#EAECF0] border-b-[1px]"
                  key={user._id}
                >
                  <td
                    className="py-[13px]"
                    onClick={() =>
                      navigate(`/sponsor-details?user=${user._id}`)
                    }
                  >
                    {user.fullName}
                  </td>
                  <td
                    className="py-[13px]"
                    onClick={() =>
                      navigate(`/sponsor-details?user=${user._id}`)
                    }
                  >
                    {user.email}
                  </td>
                  <td
                    className="py-[13px]"
                    onClick={() =>
                      navigate(`/sponsor-details?user=${user._id}`)
                    }
                  >
                    {user.organisation}
                  </td>
                  <td
                    className="py-[13px]"
                    onClick={() =>
                      navigate(`/sponsor-details?user=${user._id}`)
                    }
                  >
                    {user.phoneNumber}
                  </td>
                  <td className="flex justify-center text-[24px] items-center gap-[12px] py-[13px]">
                    <a
                      href={user?.instagramLink}
                      target="_blank"
                      alt="instagram icon"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={user?.twitterLink}
                      target="_blank"
                      alt="twitter icon"
                    >
                      <FaXTwitter />
                    </a>
                    {/* <a href={user?.facebookLink} target='_blank' alt='facebook icon'><FaFacebookSquare /></a> */}
                  </td>
                  <td>{formatDate(user.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendees;
