import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router";
import { fetchSponsorDetails } from '../api/data';

const SponsorDetails = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('user');

    const [userDetails, setUserDetails] = useState({})
    useEffect(()=> {
        fetchSponsorDetails(id)
        .then(res => {
            // console.log(res);
            setUserDetails(res.data.data.sponsor)
        })
        .catch(err => {
            // console.log(err);   
        })
    }, [])

  return (
    <div className=''>
        <div className='mb-[32px]'>
            <button className='flex items-center gap-[4px] font-[500] text-[12px] text-[#121927] leading-[150%] tracking-[3%]' onClick={()=>navigate(-1)}>
                <FaArrowLeftLong className='text-[16px]'/>
                Back
            </button>
        </div>
       <div className='border-[1px] border-[#EAEAEA] rounded-[8px] p-[24px] bg-[#fff] min-h-[70vh]'>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Name</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>{userDetails?.fullName}</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Email Address</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>{userDetails?.email}</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Organization</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>{userDetails?.organisation}</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Phone Number</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>{userDetails?.phoneNumber}</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Date registered</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>John Doe</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Social Links</h2>
                <div className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%] flex gap-[12px]'>
                    <a href={userDetails?.instagramLink} target='_blank' alt='social logos'><FaInstagram /></a>
                    <a href={userDetails?.twitterLink} target='_blank' alt='social logos'><FaXTwitter /></a>
                    <a href={userDetails?.facebookLink} target='_blank' alt='social logos'><FaFacebookSquare /></a>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default SponsorDetails