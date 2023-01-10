import React, { useState } from "react";
import calendar from "../../assests/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ActivityList from "../activityList/ActivityList";
import { ActivityData } from "../../utils/ActivityData";


const Activity = () => {
     const [startDate, setStartDate] = useState(new Date());
     const [selectValue , setSelectValue] = useState("")

     const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
     }

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h2>Recent Activity</h2>
          <select className="border-0 py-3 px-6 rounded-xl focus:outline-none" onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
            <option value="Processing">Processing</option>
          </select>
        </div>

        <div className="flex justify-center items-center bg-white pl-5 rounded-2xl gap-2">
          <img src={calendar} alt="calendar" className="w-6"/>
          <DatePicker
          className="border-0 text-[14px] font-semibold w-[130px]  focus:outline-none cursor-pointer"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"
    />
        </div>
      </div>
      <ActivityList selectValue={selectValue}/>
    </div>
  );
};

export default Activity;
