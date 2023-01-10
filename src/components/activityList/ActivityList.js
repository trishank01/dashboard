import React, { useEffect, useState } from "react";
import { ActivityData } from "../../utils/ActivityData";

const ActivityList = ({ selectValue }) => {
  const [selectedData, setselectedData] = useState([]);

  useEffect(() => {
    const filteredData = ActivityData.filter((item) => {
      return item.status === selectValue;
    });
    if (selectValue === "all") {
      setselectedData(ActivityData);
    } else {
      setselectedData(filteredData);
    }
  }, [selectValue]);

  useEffect(() => {
    setselectedData(ActivityData);
  }, []);

  return (
    <div>
      <table className="w-full flex flex-col bg-white p-2 mt-5 rounded-2xl">
        <thead className="">
          <tr className="flex justify-between border-0 border-b-[1px] border-solid border-grey px-0 py-2">
            <div>
              <th>Activity</th>
            </div>
            <div className="flex justify-between w-[550px]">
              <th>Amount</th>
              <th className="mr-20">Status</th>
              <th>Date</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {selectedData.map((data) => {
            return (
              <tr
                key={data.id}
                className="flex justify-between border-0 border-b-[1px] border-solid border-grey px-0 py-2"
              >
                <div>
                  <td className="flex gap-2">
                    {" "}
                    <img className="w-6" src={data.icon} alt="" />{" "}
                    {data.Activity}
                  </td>
                </div>
                <div className="flex justify-between w-[550px]">
                  <td className="w-[150px] flex justify-start">
                    {data.amount === undefined ? "No Amount" : data.amount}
                  </td>
                  <div className="w-[200px] flex justify-start">
                    <td
                      className={`${
                        data.status === "Success"
                          ? "bg-light-success text-success"
                          : data.status === "Failed"
                          ? "bg-light-failed text-failed"
                          : data.status === "Processing"
                          ? "bg-light-processing text-processing"
                          : ""
                      } font-semibold px-3 py-1 rounded-xl`}
                    >
                      {data.status}
                    </td>
                  </div>

                  <td>{data.date}</td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
