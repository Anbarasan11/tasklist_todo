import { useState } from "react";
import React from "react";
import { TaskCard } from "./TaskCard";

export const Tasklist = ({ tasks, setTask }) => {
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      {" "}
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </div>
  );
};
