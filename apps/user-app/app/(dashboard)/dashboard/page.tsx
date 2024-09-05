import { Card } from "@repo/ui/card";
import React from "react";
Card

export default function Dashboard() {
  return (
    <div className="flex-row p6 rounded-xl w-full ">

      {/* Main Content */}
      <div className="flex-1 p-8 ">
        <div className="text-2xl font-bold text-gray-900 mb-6">
          Good afternoon, Shubham
        </div>

        {/* Portfolio Value Section */}
        <div className="bg-white h-80 p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold">Portfolio value</div>
            <div className="text-2xl font-bold">$0.00</div>
          </div>
          <div className="h-32 bg-gray-100 rounded-md mt-4 mb-4"></div>
          <div className="flex space-x-4 text-gray-600">
            {["1W", "1M", "3M", "6M", "1Y", "ALL"].map((range) => (
              <button
                key={range}
                className="px-4 py-2 text-sm font-medium rounded hover:bg-gray-200"
              >
                {range}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
          <button ></button>
        </div>
        </div>

        {/* Actions Section */}
        
      </div>

      <div className="flex-2 border p-6 mx-7  rounded-xl shadow-sm bg-white">
          <div className="text-sm font-bold mb-2">Set up recurring buys</div>
          <p className="text-gray-600 mb-4">
            Schedule regular crypto purchases to balance market fluctuations. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio et tenetur sed officia aperiam tota
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Get started
          </button>
      </div>
      

    </div>
  );
}
