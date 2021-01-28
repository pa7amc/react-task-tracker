import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
      //https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map
      return (
            <>
                  {tasks.map((task) => (
                        <Task key={task.id} task={task} onDelete={onDelete} />
                  ))}
            </>
      );
};

export default Tasks;
