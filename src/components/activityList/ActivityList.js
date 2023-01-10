import React from "react";
import { ActivityData } from "../../utils/ActivityData";

const ActivityList = () => {
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
          {ActivityData.map((data) => {
            return (
              <tr className="flex justify-between border-0 border-b-[1px] border-solid border-grey px-0 py-2">
                <div>
                  <td>{data.Activity}</td>
                </div>
                <div className="flex justify-between w-[550px]">
                  <td>{data.amount === undefined  ? "No Amount" : data.amount }</td>
                  <td className={`${data.status === "Success" ? "bg-light-success text-success" : data.status === "Failed" ? "bg-light-failed text-failed mr-20" : data.status === "Processing" ? "bg-light-processing text-processing" : ""} font-semibold px-3 py-1 rounded-xl`}>
                    {data.status}
                  </td>
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
