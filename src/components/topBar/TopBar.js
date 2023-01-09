import React from "react";
import Vector from "../../assests/Vector.png";
import notification from "../../assests/notification.png";
import Message from "../../assests/Message.png";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex justify-center items-center gap-4">
        <div>
          <img src={Vector} alt="Vector" />
          <img src={Vector} alt="Vector" />
        </div>
        <p className="w-[600px]">
          {" "}
          For God so loved the world that He gave His only begotten Son, that
          whoever beleives in Him should not perish but have everlasting life{" "}
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex bg-white p-2 rounded-lg cursor-pointer">
          <img className="w-7"  src={notification} alt="notification" />
        </div>
        <div className="flex bg-white p-2 rounded-lg cursor-pointer">
          <img  className="w-7" src={Message} alt="Message" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
