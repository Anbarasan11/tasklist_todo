import { useState } from "react";
import { Tasklist } from "./compnents/Tasklist";
import { AddTask } from "./compnents/AddTask";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);

  return (
    <div className="App">
      <main>
        <AddTask tasks={tasks} setTask={setTask} />
        <Tasklist tasks={tasks} setTask={setTask} />
      </main>
    </div>
  );
}

export default App;
