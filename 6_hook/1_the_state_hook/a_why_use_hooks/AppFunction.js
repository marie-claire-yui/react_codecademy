import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}


// we want to add a state to our function component --> React Hooks
// React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components.
// Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state. 
// React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the React docs. 
// In this lesson, we’ll learn how to:

//     Build a “stateful” function component.
//     Use the State Hook.
//     Initialize a state and set a state.
//     Define event handlers.
//     Use state setter callback functions.
//     Use state with arrays and objects.
