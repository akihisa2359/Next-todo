"use client";

import { useState } from "react";
import DoneButton from "./buttons/done";

export default function Task({ text, onClick }) {
  const [done, setDone] = useState(false);

  return (
    <div>
      <div
        className="flex items-center h-10 px-4 rounded-full text-sm shadow-md bg-white
         cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={onClick}
      >
        <div
          className={`flex-[9] transition-opacity duration-500 text-gray-600 ${
            done ? "opacity-50" : ""
          }`}
        >
          {text}
        </div>
        <div className="flex-1 flex justify-end">
          <DoneButton
            done={done}
            onClick={(event) => {
              event.stopPropagation();
              setDone(!done);
            }}
          />
        </div>
      </div>
    </div>
  );
}
