import "./App.css";
import { useMemo } from "react";

import Navbar from "./components/Navbar/Navbar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

import TaskContext from "./context/TaskContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const contextValue = useMemo(
    () => ({
      tasks,
      addTask,
      toggleTask,
      deleteTask,
    }),
    [tasks]
  );

  return (
    <TaskContext.Provider value={contextValue}>
      <div className="App">
        <Navbar />
        <h2>Task Manager</h2>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <Footer tasks={tasks} />
      </div>
    </TaskContext.Provider>
  );
}

export default App;