import React, { useState } from "react";
import ArrowLeft from "../../assests/arrowleft.png";
import ArrowRight from "../../assests/arrowRight.png";
import { Daydata } from "../../utils/dayData";
import Image from "../../assests/Image.png";

const Calender = () => {
  const [bgColor, setBgColor] = useState("Thu");
  const HandleBgChange = (day) => {
    setBgColor(day);
  };
  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-semibold">May 2022</h2>
        <div className="flex gap-4">
          <img
            className="w-6 h-6 object-contain bg-white rounded-2xl p-2 cursor-pointer"
            src={ArrowLeft}
            alt="ArrowLeft"
          />
          <img
            className="w-6 h-6 object-contain bg-white rounded-2xl p-2 cursor-pointer"
            src={ArrowRight}
            alt="ArrowRight"
          />
        </div>
      </div>
      <div className="flex justify-between">
        {Daydata.map((data) => {
          return (
            <div
            key={data.id}
              className={`flex flex-col items-center cursor-pointer w-14 rounded-3xl  ${
                bgColor === data.day ? "bg-green" : ""
              }`}
              onClick={() => HandleBgChange(data.day)}
            >
              <p
                className={`${
                  bgColor === data.day ? "text-white" : "text-grey"
                }`}
              >
                {data.day}
              </p>
              <p
                className={`${
                  bgColor === data.day ? "text-white" : "text-black"
                } font-semibold`}
              >
                {data.num}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-14 w-[580px] h-[350px] overflow-auto pr-5">
        <div className="flex items-center gap-10">
          <p className="w-[150px] font-semibold">8:00 - 8:30</p>
          <div className="flex items-center gap-5 bg-pink w-full py-2 px-4 rounded-3xl">
            <div className="w-16">
              <img className="w-full" src={Image} alt="avatar" />
            </div>
            <div >
              <p className="font-semibold m-0">CNN</p>
              <p className="text-grey m-0">Alisa Janes</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-6">
          <p className="w-[150px] font-semibold">8:00 - 8:30</p>
          <div className="flex items-center gap-5 bg-purple w-full py-2 px-4 rounded-3xl">
            <div className="w-16">
              <img className="w-full" src={Image} alt="avatar" />
            </div>
            <div >
              <p className="font-semibold m-0">LVN</p>
              <p className="text-grey m-0">Alisa Jones </p>
            </div>
          </div>
        </div>


        <div className="flex items-center gap-10 mt-6">
          <p className="w-[150px] font-semibold">8:00 - 8:30</p>
          <div className="flex items-center gap-5 bg-light-pink w-full py-2 px-4 rounded-3xl">
            <div className="w-16">
              <img className="w-full" src={Image} alt="avatar" />
            </div>
            <div >
              <p className="font-semibold m-0">RN/LPN</p>
              <p className="text-grey m-0">Alisa Janes</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-6">
          <p className="w-[150px] font-semibold">8:00 - 8:30</p>
          <div className="flex items-center gap-5 bg-pink w-full py-2 px-4 rounded-3xl">
            <div className="w-16">
              <img className="w-full" src={Image} alt="avatar" />
            </div>
            <div >
              <p className="font-semibold m-0">CNN</p>
              <p className="text-grey m-0">Alisa Janes</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-10 mt-6">
          <p className="w-[150px] font-semibold">8:00 - 8:30</p>
          <div className="flex items-center gap-5 bg-light-pink w-full py-2 px-4 rounded-3xl">
            <div className="w-16">
              <img className="w-full" src={Image} alt="avatar" />
            </div>
            <div >
              <p className="font-semibold m-0">RN/LPN</p>
              <p className="text-grey m-0">Alisa Janes</p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Calender;
