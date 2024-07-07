import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import img from '../asset/greek_913.png'
import { FaSun, FaRegUserCircle, FaRegUser, FaUserFriends, FaMoon } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Sidebar = ({showSidebarClass, sidebarRef, toggleDarkMode, isDarkMode}) => {
  return (
    <>
    <div className={`sidebar shadow position-fixed top-0 h-100 z-1 ${showSidebarClass}  ${!isDarkMode ? "light" : ""}`} ref={sidebarRef}>
        <div className={`sidebar_header p-3 d-flex flex-column justify-content-end  ${!isDarkMode ? "header_light" : ""}`}>
            <div className='mb-4 d-flex justify-content-between'>
                <div>
                    <img src={img} alt="Avatar" width={50} className=' rounded-circle'/>
                </div>
                <button className=' bg-transparent border-0' onClick={toggleDarkMode}>
                    {
                        isDarkMode ? (

                            <FaSun className=' text-white'/>
                        )
                        : (

                            <FaMoon className=' text-white'/>
                        )
                    }
                </button>
            </div>
            <div className=' d-flex justify-content-between'>
                <div>
                <p className='mb-0 text-white'>User Name</p>
                <span className={`text-white-50`}>+91 000000000</span>
                </div>
                <div>
                <IoIosArrowDown className=' text-white' />
                </div>
            </div>
        </div>
        <ul className='pt-4'>
            <li className='my-3'><FaRegUserCircle className={`me-3 ${!isDarkMode ? "text-black" : "text-white-50"}`} /><NavLink className={`${!isDarkMode ? "text-black" : "text-white"}`}>My Profile</NavLink></li>
            <li className='my-3'><FaUserFriends className={`me-3 ${!isDarkMode ? "text-black" : "text-white-50"}`}/><NavLink className={`${!isDarkMode ? "text-black" : "text-white"}`}>New Group</NavLink></li>
            <li className='my-3'><FaRegUser className={`me-3 ${!isDarkMode ? "text-black" : "text-white-50"}`}/><NavLink className={`${!isDarkMode ? "text-black" : "text-white"}`}>Contacts</NavLink></li>
            <li className='my-3'><IoCall className={`me-3 ${!isDarkMode ? "text-black" : "text-white-50"}`}/><NavLink className={`${!isDarkMode ? "text-black" : "text-white"}`}>Calls</NavLink></li>
            <li className='my-3'><IoMdSettings className={`me-3 ${!isDarkMode ? "text-black" : "text-white-50"}`}/><NavLink className={`${!isDarkMode ? "text-black" : "text-white"}`}>Setting</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar