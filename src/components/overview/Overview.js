import React from "react";
import eye from "../../assests/eye.png";
import Group from "../../assests/Group.png";
import GroupChat from "../../assests/GroupChat.png";
import Shift from "../../assests/shift.png";
import Shift2 from "../../assests/shift2.png";
import Vector from "../../assests/Vector2.png";
import { OverviewData } from "../../utils/OverviewData";

const Overview = () => {
  return (
    <div>
        <h2>Overview</h2>
      <div className="grid grid-cols-2 gap-5 justify-between">
        {OverviewData.map((data) => {
          return (
            <div className="flex flex-col w-[200px] h-[140px] bg-white p-5 rounded-2xl">
              <img className="w-[50px]" src={data.icon} alt="group" />
              <div className="flex justify-between mt-3">
                <p className="text-grey">{data.text}</p>
                <p className="font-semibold">{data.num}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
