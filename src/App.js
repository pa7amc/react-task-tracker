import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

      return (
            <div className="cont1">
                  <Header />
                  <Tasks tasks={tasks}/>
                  {/* 
      <h2>Hello {name}</h2>
      <h3>Hello {x ? "Y" : "N"}</h3> */}
            </div>
      );
}

export default App;
