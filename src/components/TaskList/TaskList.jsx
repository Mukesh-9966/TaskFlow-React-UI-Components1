import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;