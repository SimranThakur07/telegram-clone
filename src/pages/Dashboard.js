import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import img from "../asset/greek_913.png";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import Sidebar from "../components/Sidebar";
import axios from "axios";
const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeClass, setActiveClass] = useState("");
  const [showSidebarClass, setShowSidebarClass] = useState("");
  const [userData, setUserData] = useState([])
  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebarClass("");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getUserList = () => {
   axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=1`).then((res) => {
    setUserData(res?.data?.data?.data)
   })
  }

  useEffect(() => {
    getUserList()
    if (showSidebarClass === "open") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebarClass]);

  function formatToIST(time) {
    const utcDate = new Date(time);
    const utcTime = utcDate.getTime();
    const ISTOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(utcTime + ISTOffset);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
  
    return istTime.toLocaleTimeString('en-US', options);
  }


  return (
    <>
      <Sidebar
        showSidebarClass={showSidebarClass}
        sidebarRef={sidebarRef}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <div
        className={`d-flex dashboard min-vh-100 position-relative overflow-hidden ${
          showSidebarClass === "open" ? "ps-5 ps-lg-0" : ""
        }`}
      >
        <div className={`col-md-3 col-12  users ${!isDarkMode ? "light" : ""}`}>
          <div
            className={`menu p-2 d-flex align-items-baseline justify-content-between  ${
              !isDarkMode ? "header_light" : ""
            }`}
          >
            <button
              className={`toggler border-0 fs-4 text-white `}
              onClick={() => setShowSidebarClass("open")}
            >
              <FaBars />
            </button>
            <Link className={`fw-semibold fs-5 text-white`}>Telegram</Link>
            <Link>
              <FaSearch className={`me-1 search-icon text-white`} />
            </Link>
          </div>
          <ul
            class={`nav nav-tabs pt-3 ${!isDarkMode ? "header_light" : ""}`}
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Regular
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Unread
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#disabled-tab-pane"
                type="button"
                role="tab"
                aria-controls="disabled-tab-pane"
                aria-selected="false"
              >
                Personal
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div className="px-2">
                {
                    userData && userData?.map((i) => (
                <Link
                  className={`p-2 rounded-2 d-flex justify-content-between mt-3 user-list ${
                    !isDarkMode ? "user-list-light" : ""
                  }`}
                  onClick={() => setActiveClass("show")}
                  key={i?.id}
                >
                  <div>
                    <img src={img} alt="Avatar" width={45} className=" rounded-circle" />
                  </div>
                  <div>
                    <h6
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {i?.creator?.name || "UnKnown"}
                    </h6>
                    <p
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      Lorem ipsum dolor...{" "}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`time ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      {formatToIST(i?.created_at)}
                    </span>
                  </div>
                </Link>
                   ))
                }
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
               <div className="px-2">
                {
                    userData && userData?.map((i) => (
                <Link
                  className={`p-2 rounded-2 d-flex justify-content-between mt-3 user-list ${
                    !isDarkMode ? "user-list-light" : ""
                  }`}
                  onClick={() => setActiveClass("show")}
                  key={i?.id}
                >
                  <div>
                    <img src={img} alt="Avatar" width={45} className=" rounded-circle" />
                  </div>
                  <div>
                    <h6
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {i?.creator?.name || "UnKnown"}
                    </h6>
                    <p
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      Lorem ipsum dolor...{" "}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`time ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      {formatToIST(i?.created_at)}
                    </span>
                  </div>
                </Link>
                   ))
                }
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
             <div className="px-2">
                {
                    userData && userData?.map((i) => (
                <Link
                  className={`p-2 rounded-2 d-flex justify-content-between mt-3 user-list ${
                    !isDarkMode ? "user-list-light" : ""
                  }`}
                  onClick={() => setActiveClass("show")}
                  key={i?.id}
                >
                  <div>
                    <img src={img} alt="Avatar" width={45} className=" rounded-circle" />
                  </div>
                  <div>
                    <h6
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {i?.creator?.name || "UnKnown"}
                    </h6>
                    <p
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      Lorem ipsum dolor...{" "}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`time ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      {formatToIST(i?.created_at)}
                    </span>
                  </div>
                </Link>
                   ))
                }
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabindex="0"
            >
              <div className="px-2">
                {
                    userData && userData?.map((i) => (
                <Link
                  className={`p-2 rounded-2 d-flex justify-content-between mt-3 user-list ${
                    !isDarkMode ? "user-list-light" : ""
                  }`}
                  onClick={() => setActiveClass("show")}
                  key={i?.id}
                >
                  <div>
                    <img src={img} alt="Avatar" width={45} className=" rounded-circle" />
                  </div>
                  <div>
                    <h6
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {i?.creator?.name || "UnKnown"}
                    </h6>
                    <p
                      className={`mb-0 ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      Lorem ipsum dolor...{" "}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`time ${
                        !isDarkMode ? "text-black" : "text-white-50"
                      }`}
                    >
                      {formatToIST(i?.created_at)}
                    </span>
                  </div>
                </Link>
                   ))
                }
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-md-9 col-12 right-pattern  ${activeClass} ${
            !isDarkMode ? "light" : "bg-black"
          }`}
        >
          <MessageBox
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
