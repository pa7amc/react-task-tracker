import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
      //https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map
      return (
            <>
                  {tasks.map((task) => (
                        <Task
                              key={task.id}
                              task={task}
                              onDelete={onDelete}
                              onToggle={onToggle}
                        />
                  ))}
            </>
      );
};

export default Tasks;
