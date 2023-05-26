import React from 'react'

export const TaskCard = ({task , handleDelete}) => {
  return (
    <div>   <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
    <span>
      {task.id} - {task.name}
    </span>
    <button className="delete" onClick={() => handleDelete(task.id)}>
      Delete
    </button>
  </li>
</div>
  )
}
