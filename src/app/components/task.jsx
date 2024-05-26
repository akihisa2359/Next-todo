"use client";

import { useState } from "react";
import DoneButton from "./buttons/done";
import Modal from "./modal";
import useModal from "../hooks/useModal";

export default function Task({ text }) {
  const [done, setDone] = useState(false);
  const { visible, show, hide } = useModal();

  return (
    <div>
      {visible && (
        <Modal onClick={hide}>
          <div className="w-[80vw] max-w-[300px] h-[50vh] bg-white rounded-2xl">
            {text}
          </div>
        </Modal>
      )}
      <div
        className="flex items-center h-10 px-4 rounded-full text-sm shadow-md bg-white
         cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={show}
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
