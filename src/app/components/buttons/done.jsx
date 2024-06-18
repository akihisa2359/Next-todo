"use client";

import Icon from "../myIcon";

export default function DoneButton({ done, onClick }) {
  return (
    <div
      className={`w-6 h-6 rounded-full transition-colors duration-500 ${
        done ? "bg-green-400" : "bg-gray-200 hover:bg-green-100"
      } `}
      onClick={(event) => onClick(event)}
    >
      <div className="opacity-70 text-white">
        <Icon name="check" />
      </div>
    </div>
  );
}
