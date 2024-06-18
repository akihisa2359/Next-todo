"use client";

import Task from "./components/task";
import NewButton from "./components/buttons/new";
import { useState } from "react";
import Modal from "./components/modal";
import TaskForm from "./components/taskForm";
import useModal from "./hooks/useModal";

export default function Home() {
  const [tasks, setTasks] = useState(["hoge", "fuga", "piyo", "aaa"]);
  const { visible, show, hide } = useModal();
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const selectedTask =
    selectedTaskIndex === null ? null : tasks[selectedTaskIndex];
  console.log("selectedTask", selectedTask);

  return (
    <main>
      <Modal visible={visible} onClick={hide}>
        <TaskForm
          key={selectedTaskIndex}
          title={selectedTask}
          onSubmit={(task) => {
            let newTasks = null;
            if (selectedTaskIndex === null) {
              newTasks = [...tasks, task];
            } else {
              newTasks = [...tasks];
              newTasks[selectedTaskIndex] = task;
            }
            setTasks(newTasks);
            hide();
          }}
        />
      </Modal>
      {/* header */}
      <div className="header h-12 flex justify-center items-center border-b tracking-wide">
        Tasks
      </div>
      {/* main */}
      {/* container */}
      <div className="mt-8" />
      <div className="container">
        {tasks.map((task, i) => (
          <div key={i} className="mb-4">
            <Task
              text={task}
              onClick={() => {
                setSelectedTaskIndex(i);
                show();
              }}
            />
          </div>
        ))}
        <NewButton
          opened={visible}
          onClick={() => {
            setSelectedTaskIndex(null);
            show();
          }}
        />
      </div>
    </main>
  );
}
