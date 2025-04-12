import React from "react";

function Task({text, category, index, onDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteTask(index)}>X</button>
    </div>
  );
}

export default Task;
