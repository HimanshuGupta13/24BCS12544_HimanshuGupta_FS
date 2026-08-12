function TaskItem({ task, dispatch }) {
  function toggleTask() {
    dispatch({
      type: "TOGGLE_TASK",
      payload: task.id,
    });
  }

  function deleteTask() {
    dispatch({
      type: "DELETE_TASK",
      payload: task.id,
    });
  }

  return (
    <div >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleTask}
        />

        <span
          className={task.completed ? "completed" : ""}
        >
          {task.title}
        </span>
      </div>

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );   
}

export default TaskItem;  