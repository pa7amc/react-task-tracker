import { useState } from "react";

const Tasks = () => {
        //tasks are now part of the State of component
        //State is immutable
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
      //https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map
      return (
            <>
                  {tasks.map((task) => (
                        <h3>{task.text}</h3>
                  ))}
            </>
      );
};

export default Tasks;
