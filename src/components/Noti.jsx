import React from "react";
import { useState } from "react";

export default function Noti(props) {
  return (
    <div>
      <div className="lg:w-50 px-6 lg:px-0 mb-2 mr-2">
        <div className="p-4 bg-blue-500 rounded-lg shadow-lg font-medium text-white">
          {props.text}
        </div>
        {/* <div
          className={`bg-green-300 p-3 rounded-md shadow-md transition-transform duration-500 transform translate-x-0 opacity-100 ${
            props.isVisible
              ? "origin-top transition-all duration-300 transform opacity-0 -translate-y-full"
              : "origin-top transition-all duration-300 transform opacity-100 -translate-y-0"
          } hover:translate-x-full hover:opacity-0`}
        >
          {props.text}
        </div> */}
      </div>
    </div>
  );
}
