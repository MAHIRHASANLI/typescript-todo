import React from "react";
import { TodoType } from "./TypeComponent";

type PropsType = {
  task: TodoType;
  handleDeleteTodo(name: string): void;
};

const TodoItem = ({ task, handleDeleteTodo }: PropsType) => {

  return (
    <div>
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <br />
        <button onClick={() => handleDeleteTodo(task.taskName)}>Sill</button>
      </div>
    </div>
  );
};

export default TodoItem;
