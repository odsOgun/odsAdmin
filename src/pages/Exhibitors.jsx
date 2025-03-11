import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { fetchExhibitors } from '../api/data'
import { useNavigate } from 'react-router'

const Exhibitors = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=> {
        fetchExhibitors()
        .then(res => {
            // console.log(res);
            setUsers(res.data.exhibitors)
            setFilteredUsers(res.data.exhibitors);
            setCount(res.data.count)    
        })
        .catch(error => {
            console.log(error);       
        })
    }, [])
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        
        setSearch(query);
        
        if (!query.trim()) {
            setFilteredUsers(users);
            return;
        }
        const filtered = users.filter(user =>
            user.fullName.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.organisation.toLowerCase().includes(query) ||
            String(user.phoneNumber).includes(query)
        );
        setCount(filtered.length)
        setFilteredUsers(filtered);
    };
    function formatDate(isoString) {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    

  return (
    <div className='border-[1px] border-[#EAEAEA] rounded-[8px] p-[24px] bg-[#fff] min-h-[70vh]'>
        <div className='flex justify-between mb-[24px]'>
            <h2 className='font-medium text-[20px] text-[#121927] leading-[30px] tracking-[3%]'>EXHIBITORS ({count})</h2>
            <div className='relative h-[44px] w-[346px] border-[1px] border-[#D0D5DD] rounded-[8px] text-[#667085]'>
                <CiSearch className='absolute top-[30%] left-[8px] text-[20px]'/>
                <input 
                    type='search' 
                    placeholder='Search'
                    value={search} 
                    className='w-[100%] h-[100%] pl-[32px] font-regular text-[16px] leading-[24px] tracking-[0] border-[#D0D5DD] outline-[0]'
                    onChange={handleSearch}/>
            </div>
        </div>
        <div className='w-[100%]'>
            <table className='w-[100%]'>
                <thead className='font-medium bg-[#F9FBFA] border-b-[0.4px] border-b-[#EAECF0] text-[#667085] text-[12px] leading-[18px]'>
                    <tr>
                        <th className='py-[13px]'>Full Name</th>
                        <th className='py-[13px]'>Email</th>
                        <th className='py-[13px]'>Organization</th>
                        <th className='py-[13px]'>Phone Number</th>
                        <th className='py-[13px]'>Social Media</th>
                        <th className='py-[13px]'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (<tr className='text-center text-[#101828] text-[14px] leading-[16.8px] tracking-[0] font-regular border-b-[#EAECF0] border-b-[1px]' key={user._id}>
                        <td className='py-[13px]' onClick={()=>navigate(`/exhibitor-details?user=${user._id}`)}>{user.fullName}</td>
                        <td className='py-[13px]' onClick={()=>navigate(`/exhibitor-details?user=${user._id}`)}>{user.email}</td>
                        <td className='py-[13px]' onClick={()=>navigate(`/exhibitor-details?user=${user._id}`)}>{user.organisation}</td>
                        <td className='py-[13px]' onClick={()=>navigate(`/exhibitor-details?user=${user._id}`)}>{user.phoneNumber}</td>
                        <td className='flex justify-center text-[24px] items-center gap-[12px] py-[13px]'>
                            <a href={user?.instagramLink} target='_blank' alt='instagram icon'><FaInstagram /></a>
                            <a href={user?.twitterLink} target='_blank' alt='twitter icon'><FaXTwitter /></a>
                            {/* <a href={user?.facebookLink} target='_blank' alt='facebook icon'><FaFacebookSquare /></a> */}
                        </td>
                        <td>{formatDate(user.createdAt)}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Exhibitors