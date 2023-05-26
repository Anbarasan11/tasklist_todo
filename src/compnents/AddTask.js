import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTask }) => {
  const [taskValue, setTaskvalue] = useState("");
  const handleChange = (event) => {
    setTaskvalue(event.target.value);
  };
  const handleReset = () => {
    setTaskvalue("");
    setProgress("Pending");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      completed: Boolean(progress),
    };
    handleReset();
    setTask([...tasks, task]);
  };
  const [progress, setProgress] = useState(false);
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="addtask"
          autoComplete="off"
          onChange={handleChange}
          value={taskValue}
        />
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button type="submit">Submit</button>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </form>
     
    </section>
  );
};
