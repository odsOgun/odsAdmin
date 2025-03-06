import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Details = () => {
  return (
    <div className=''>
        <div className='mb-[32px]'>
            <button className='flex items-center gap-[4px] font-[500] text-[12px] text-[#121927] leading-[150%] tracking-[3%]'>
                <FaArrowLeftLong className='text-[16px]'/>
                Back
            </button>
        </div>
       <div className='border-[1px] border-[#EAEAEA] rounded-[8px] p-[24px] bg-[#fff] min-h-[70vh]'>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Name</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>John Doe</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Email Address</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>jaytinentalworld@gmail.com.ng</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Organization</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>John Doe</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Phone Number</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>090353535353</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Date registered</h2>
                <p className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%]'>John Doe</p>
            </div>
            <div className='mb-[24px]'>
                <h2 className='font-[500] text-4 text-[#121927] leading-[150%] tracking-[3%] mb-[8px]'>Social Links</h2>
                <div className='font-[400] text-[16px] text-[#787878] leading-[150%] tracking-[3%] flex gap-[12px]'>
                    <FaInstagram />
                    <FaXTwitter />
                    <FaFacebookSquare /></div>
            </div>
        </div>     
    </div>
  )
}

export default Details