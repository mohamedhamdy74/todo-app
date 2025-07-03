import { deleteTask, toggleTask } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center mt-1 animate-fadeIn text-xl font-bold bg-white/30   
  hover:bg-white/40 transition-all duration-300 text-black rounded-2xl shadow-xl p-6">
      {/* النص */}
      <span
        className={`${
          task.completed ? "line-through decoration-white decoration-2" : ""
        } text-start max-w-[70%]  break-words`}
      >
        {task.text}
      </span>

      {/* checkbox و زر الحذف */}
      <div className="flex gap-2 items-center">
        <input
          className="w-5 h-5 accent-blue-500 cursor-pointer rounded transition text-xl
          active:scale-110 transition-all hover:scale-110 "
          title="Delet task"
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="active:scale-110 transition-all hover:scale-110 "
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Task;
