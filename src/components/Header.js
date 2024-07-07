import React from 'react'
import img from '../asset/greek_913.png'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { LuPin } from "react-icons/lu";
const Header = ({setActiveClass, isDarkMode, messages}) => {

const formatDate = (date) => {
    const currentDate = new Date(date)
    const day = currentDate.getDate().toString().padStart(2, "0")
    const month = currentDate.getMonth().toString().padStart(2, "0")
    const year = currentDate.getFullYear()
    return `${day}-${month}-${year}`
}

  return (
    <>
    <div className={` d-flex flex-wrap justify-content-between py-2 px-4 header  ${!isDarkMode ? "header_light border-2" : ""}`}>
        <div className=' d-flex'>
            <div >
                <Link onClick={() => setActiveClass("")}><FaArrowLeft className=' text-white fs-4 me-4'/></Link>
            <img src={img} alt="Avatar" width={40} className=' rounded-circle' />
            </div>
            <div className='ms-3'>
                <h5 className='mb-0 text-white'>{messages[0]?.sender?.name}</h5>
                <span className='time text-white'>last seen {formatDate(messages[0]?.created_at)}</span>
            </div>
        </div>
        <div className='d-flex'>
            <Link className='d-lg-flex d-none align-items-center me-3 fs-5 text-white'><span className={`pinned me-3 ${isDarkMode ? "" : "text-white"}`}>Pinned Message</span><LuPin /></Link>
            <Link className='d-lg-flex d-none align-items-center me-3 fs-5 text-white'><FaSearch/></Link>
            <Link className='d-flex align-items-center me-3 fs-5 text-white'><HiDotsVertical /></Link>
        </div>
       
        <div className='w-100 mt-3 d-lg-none d-block '>
        <Link className='d-flex align-items-center me-3 fs-5 text-white-50'><span className={`pinned me-3 ${isDarkMode ? "" : "text-white"}`}>Pinned Message</span><LuPin /></Link>
        </div>
    </div>
    </>
  )
}

export default Header