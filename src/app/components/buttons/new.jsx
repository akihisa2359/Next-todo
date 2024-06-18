"use client";

import useModal from "src/app/hooks/useModal";
import Icon from "../myIcon";
import Modal from "../modal";
import TaskForm from "../taskForm";

export default function NewButton({ onClick, opened }) {
  // animationが反応しなくなる（rotateするがdurationが効かない）ため以下は利用しない
  // const SpButton = ({ children }) => (
  //   <div className="md:hidden">{children}</div>
  // );

  // const PcButton = ({ children }) => (
  //   <div className="hidden md:block">{children}</div>
  // );

  // const { visible: modalVisible, show, hide } = useModal();

  return (
    <>
      {/* SP */}
      <div className="md:hidden">
        <div
          className="fixed bottom-[30px] left-1/2 translate-x-[-50%]"
          onClick={onClick}
        >
          <div className="w-16 h-16 bg-blue-400 rounded-full text-white cursor-pointer shadow-xl ">
            <div
              className={`${
                opened
                  ? "rotate-90 transition-all duration-1000"
                  : "transition-all duration-1000"
              }`}
            >
              <Icon name="add" px={64} weight={100} />
            </div>
          </div>
        </div>
      </div>
      {/* PC */}
      <div className="hidden md:block">
        <div
          className={`flex justify-center items-center h-10 px-4 rounded-full text-sm shadow-md
            bg-gray-100 cursor-pointer hover:shadow-lg text-blue-500 transition-shadow duration-300`}
          onClick={onClick}
        >
          <Icon name="add" weight={100} />
          add task
        </div>
      </div>
    </>
  );
}
