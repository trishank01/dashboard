import React from "react";
import ArrowLeft from "../../assests/arrowleft.png";
import ArrowRight from "../../assests/arrowRight.png";
import { Daydata } from "../../utils/dayData";

const Calender = () => {
  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex w-full justify-between">
        <p>May 2022</p>
        <div className="">
          <img src={ArrowLeft} alt="ArrowLeft" />
          <img src={ArrowRight} alt="ArrowRight" />
        </div>
      </div>
      <div className="flex justify-between">
        {Daydata.map((data) => {
          return (
            <div>
              <p>{data.day}</p>
              <p>{data.num}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Calender;
