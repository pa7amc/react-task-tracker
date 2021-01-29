//useEffect used to deal with sideEffects, it's often used to make something happen when the page loads
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
      const [showAddTask, setShowAddTask] = useState(false);
      const [tasks, setTasks] = useState([]);

      useEffect(() => {
            const getTasks = async () => {
                  const tasksFromServer = await fetchTasks();
                  setTasks(tasksFromServer);
            };
            getTasks();
            //add dependency array
      }, []);

      //Fetch Tasks
      //fetch api, create one async
      const fetchTasks = async () => {
            //fetch returns a promise, so we wanna await that promise
            const res = await fetch("http://localhost:5000/tasks");
            const data = await res.json();

            //we want to set data as our state, however i don't wanna have fetchTasks in useEffect because i might wanna use this somewhere else
            return data;
      };

      //Fetch Task
      const fetchTask = async (id) => {
            const res = await fetch(`http://localhost:5000/tasks/${id}`);
            const data = await res.json();

            return data;
      };

      //Add task
      const addTask = async (task) => {
            /* const id = Math.floor(Math.random() * 10000) + 1;
            const newTask = { id, ...task };
            setTasks([...tasks, newTask]); */
            const res = await fetch("http://localhost:5000/tasks", {
                  method: "POST",
                  headers: {
                        "Content-type": "application/json",
                  },
                  body: JSON.stringify(task),
            });
            //just a new task
            const data = await res.json();
            setTasks([...tasks, data]);
      };

      //Delete task
      const deleteTask = async (id) => {
            await fetch(`http://localhost:5000/tasks/${id}`, {
                  method: "DELETE",
            });

            setTasks(tasks.filter((task) => task.id !== id));
      };

      //Toggle reminder
      const toggleReminder = async (id) => {
            const taskToToggle = await fetchTask(id);
            const updatedTask = {
                  ...taskToToggle,
                  reminder: !taskToToggle.reminder,
            };
            const res = await fetch(`http://localhost:5000/task/${id}`, {
                  method: "PUT",
                  headers: { "Content-type": "application/json" },
                  body: JSON.stringify(updatedTask),
            });
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

                  <Footer />
            </div>
      );
}

export default App;
