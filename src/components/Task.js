import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
      //task should have conditional for task reminder but it's not working yet
      /* className={`task ${task.reminder ? "reminder" : ""}`} */
      return (
            <div className="task" onDoubleClick={() => onToggle(task.id)}>
                  <h3>
                        {task.text}{" "}
                        <FaTimes
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => onDelete(task.id)}
                        />
                  </h3>
                  <h3>{task.day}</h3>
            </div>
      );
};

export default Task;
