"use client";

import Task from "./components/task";
import NewButton from "./components/buttons/new";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(["hoge", "fuga", "piyo", "aaa"]);

  return (
    <main>
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
            <Task text={task} />
          </div>
        ))}
        <NewButton
          onCreate={(task) => {
            const newTasks = [...tasks, task];
            setTasks(newTasks);
          }}
        />
      </div>
    </main>
  );
}
