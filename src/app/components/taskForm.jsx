import { useState } from "react";

export default function TaskForm({ title, onSubmit }) {
  const [value, setValue] = useState(title);

  return (
    <div className="w-[80vw] max-w-[300px] h-[50vh] bg-white flex flex-col justify-center items-center">
      <div className="flex-[8] flex items-center">
        <input
          type="text"
          value={value ?? ""} // valueにnullを指定するとコンソールエラーが出る
          className="border-b-2"
          onInput={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="flex-[2] flex items-center">
        <button onClick={() => onSubmit(value)}>
          {title === null ? "create" : "update"}
        </button>
      </div>
    </div>
  );
}
