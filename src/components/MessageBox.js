import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FaRegSmile, FaPaperclip } from "react-icons/fa";
import axios from 'axios';
const MessageBox = ({activeClass, setActiveClass, isDarkMode}) => {
  const [messages, setMessages] = useState([])

  const getUserList = () => {
    axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`).then((res) => {
     setMessages(res?.data?.data)
    })
   }
   useEffect(() => {
    getUserList()
   },[])

   const formatDate = (date) => {
    const currentDate = new Date(date)
    const day = currentDate.getDate().toString().padStart(2, "0")
    const month = currentDate.getMonth().toString().padStart(2, "0")
    const year = currentDate.getFullYear()
    return `${day}-${month}-${year}`
}

  return (
    <>
   <div className=' position-relative message-container overflow-auto'>
   <Header
   activeClass={activeClass}
   setActiveClass={setActiveClass}
   isDarkMode={isDarkMode}
   messages={messages}
   />
   <span className={`position-fixed floating-time px-2 rounded-1 mt-4 bg-dark text-white`}>{formatDate(messages[0]?.created_at)}</span>
   <div>
    {
      messages && messages?.map((i) => (

    <div className={`message p-3 ${!isDarkMode ? "light border border-2 text-black" : "text-white"}`}>
      {i?.message}
    </div>
      ))
    }
   </div>
    <div className={`chat-box position-fixed bottom-0 mb-md-5 px-3 d-flex align-items-center ${!isDarkMode ? "light border border-2" : ""}`}>
    <FaRegSmile  className={`fs-4  ${!isDarkMode ? "text-black" : "text-white-50"}`}/>
        <input type="text" name="" id=""  className={`bg-transparent border-0 py-3 ps-4 w-100  ${!isDarkMode ? "text-black" : "text-white"}`} placeholder='Message'/>
        <FaPaperclip className={`fs-4  ${!isDarkMode ? "text-black" : "text-white-50"}`} />
    </div>
   </div>
    </>
  )
}

export default MessageBox