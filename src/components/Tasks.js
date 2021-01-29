import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
      //https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map
      return (
            <>
                  {tasks.map((task, index) => (
                        <Task
                              key={index}
                              task={task}
                              onDelete={onDelete}
                              onToggle={onToggle}
                        />
                  ))}
            </>
      );
};

export default Tasks;
