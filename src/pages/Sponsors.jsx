import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Sponsors = () => {
  return (
    <div className='border-[1px] border-[#EAEAEA] rounded-[8px] p-[24px] bg-[#fff] min-h-[70vh]'>
        <div className='flex justify-between mb-[24px]'>
            <h2 className='font-medium text-[20px] text-[#121927] leading-[30px] tracking-[3%]'>SPONSORS (100)</h2>
            <form>
                <div className='relative h-[44px] w-[346px] border-[1px] border-[#D0D5DD] rounded-[8px] text-[#667085]'>
                    <CiSearch className='absolute top-[30%] left-[8px] text-[20px]'/>
                    <input type='search' placeholder='Search' className='w-[100%] h-[100%] pl-[32px] font-regular text-[16px] leading-[24px] tracking-[0] border-[#D0D5DD] outline-[0]'/>
                </div>
            </form>
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
                    <tr className='text-center text-[#101828] text-[14px] leading-[16.8px] tracking-[0] font-regular border-b-[#EAECF0] border-b-[1px]'>
                        <td className='py-[13px]'>John Doe</td>
                        <td className='py-[13px]'>jaytinental@gmail.com</td>
                        <td className='py-[13px]'>Jaytinental</td>
                        <td className='py-[13px]'>+2349011221122</td>
                        <td className='flex justify-center text-[24px] items-center gap-[12px] py-[13px]'>
                            <FaInstagram />
                            <FaXTwitter />
                            <FaFacebookSquare />
                        </td>
                        <td>22/02/2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Sponsors