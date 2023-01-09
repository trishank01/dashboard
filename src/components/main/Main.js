import React from "react";
import Calender from "../calender/Calender";
import Overview from "../overview/Overview";
import TopBar from "../topBar/TopBar";

const Main = () => {
  return (
    <div className="min-h-[100%] bg-primary-blue p-3 w-full">
      <div className="bg-cream  rounded-lg p-6">
        <TopBar />
        <div className="flex gap-[80px]">
          <Overview/>
          <Calender/>
        </div>
      </div>
    </div>
  );
};

export default Main;
