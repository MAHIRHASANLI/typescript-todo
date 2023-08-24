import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { TodoType } from "./TypeComponent";
import TodoItem from "./TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  console.log(todoList);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "workDay") {
      setWorkDay(Number(event.target.value));
    }
  };

  const handleClick = (): void => {
    const newTodo: TodoType = {
      taskName: task,
      workDay,
    };
    setTodoList([...todoList, newTodo]);
    setTask("");
    setWorkDay(0);
  };
  const handleDeleteTodo = (deleteName: string): void => {
    setTodoList(todoList.filter((m) => m.taskName !== deleteName));
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="Taski yazin"
        />
        <input
          type="number"
          value={workDay}
          name="workDay"
          onChange={handleChange}
          placeholder="nece gune tamamlandi"
        />
        <button onClick={handleClick}>Yeni task elave et</button>
      </div>

      <div>
        {todoList &&
          todoList.map((item: TodoType, index: number) => (
            <TodoItem
              key={index}
              task={item}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
