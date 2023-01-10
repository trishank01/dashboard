import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillSchedule, AiFillStar } from "react-icons/ai";
import { SiGooglesheets } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import Logout from "../../assests/Logout.png"
import Image from "../../assests/Image.png"

const SideBar = () => {
  return (
    <div className="flex fixed  h-screen flex-col gap-2 items-start pt-[100px] w-[256px] p-6 bg-primary-blue">
      <NavLink to="/" className={`text-white no-underline text-sm leading-7 py-4 pl-4 pr-14 flex gap-3`}>
        <MdSpaceDashboard className="icon-color" size={28} />
        Dashboard
      </NavLink>
      <NavLink
        to="/scheduling"
        className={`text-white no-underline text-sm leading-7 py-4 pl-4 pr-14  flex gap-3`}
      >
          <AiFillSchedule className="icon-color" size={28} />
          Scheduling
      </NavLink>
      <NavLink
        to="/timesheet"
        className={`text-white no-underline text-sm leading-7 py-4 pl-4 pr-14  flex gap-3`}
      >
        <SiGooglesheets className="icon-color" size={28} />
        Timesheets
      </NavLink>
      <NavLink
        to="/ratings"
        className={`text-white no-underline text-sm leading-7 py-4 pl-4 pr-12  flex gap-3`}
      >
        <AiFillStar className="icon-color" size={28} />
        Feedbacks & Ratings
      </NavLink>
      <NavLink
        to="/document"
        className={`text-white no-underline text-sm leading-7 py-4 pl-4 pr-14  flex gap-3`}
      >
        <HiDocumentText className="icon-color" size={28} />
        Documents
      </NavLink>
      <div className="flex relative">
        <div className="flex absolute top-[150px]  gap-4 items-center">
        <div className="w-12">
          <img className="w-full" src={Image} alt="avatar"/>
        </div>
        <div className="text-white">
          <p className="m-0 text-[13px] w-[80px]">Hi, Mellani</p>
          <p className="m-0 font-semibold mt-2">Admin</p>
        </div>
        <div>
          <img className="bg-white p-2 rounded-xl" src={Logout} alt="Logout"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
