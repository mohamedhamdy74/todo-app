import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => { 
    const tasks = useSelector((state) => state.todo)
    if (tasks.length === 0) { return(<div className="font-bold text-2xl text-center w-1/2 mx-auto  bg-white/35 p-5 rounded-lg"> No tasks found </div>) }
    return (
        <ul className=' w-full  md:w-1/2  bg  
        rounded-xl  min-h-64     
      mx-auto p-7 text-center '>
            {tasks.map((task) => (
                <Task key={task.id} task={task } />
            ))}  
      </ul>
    )
}
export default TaskList;
