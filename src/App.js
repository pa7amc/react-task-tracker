import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
      const [showAddTask, setShowAddTask] = useState(false);
      const [tasks, setTasks] = useState([
            {
                  id: 1,
                  text: "Doc",
                  day: "15th Feb at 2:30pm",
                  reminder: true,
            },
            {
                  id: 2,
                  text: "Meeting",
                  day: "4th Feb at 6:40pm",
                  reminder: true,
            },
            {
                  id: 3,
                  text: "Shopping",
                  day: "9th Feb at 11:00am",
                  reminder: false,
            },
      ]);

      /*   const name = "Brad";
        const x = false; */

      //Add task
      const addTask = (task) => {
            const id = Math.floor(Math.random() * 10000) + 1;
            const newTask = { id, ...task };
            setTasks([...tasks, newTask]);
      };

      //Delete task
      const deleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id));
      };

      //Toggle reminder
      const toggleReminder = (id) => {
            setTasks(
                  tasks.map((task) =>
                        task.id === id
                              ? { ...task, reminder: !task.reminder }
                              : task
                  )
            );
      };

      return (
            <div className="container">
                  <Header
                        onAdd={() => setShowAddTask(!showAddTask)}
                        showAdd={showAddTask}
                  />
                  {/* simpler way of doing a ternary without the else */}
                  {showAddTask && <AddTask onAdd={addTask} />}

                  {tasks.length > 0 ? (
                        <Tasks
                              tasks={tasks}
                              onDelete={deleteTask}
                              onToggle={toggleReminder}
                        />
                  ) : (
                        "No tasks to show"
                  )}

                  {/* 
      <h2>Hello {name}</h2>
      <h3>Hello {x ? "Y" : "N"}</h3> */}
            </div>
      );
}

export default App;
