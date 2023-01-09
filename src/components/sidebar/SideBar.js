import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillSchedule, AiFillStar } from "react-icons/ai";
import { SiGooglesheets } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";

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
        to="/timesheets"
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
    </div>
  );
};

export default SideBar;
