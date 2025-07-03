import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice"

const AddTaskForm = () => { 
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim() === "") { return };
        dispatch(addTask(text));
        setText("");
    }

    return (
        <form className=" mx-auto flex  flex-col gap-4 mt-6 text-black items-center justify-center md:w-1/2" onSubmit={ handleSubmit} >
                
            <input className=" w-[70%] p-4 rounded-lg outline-none placeholder:text-xl placeholder:pl- placeholder:font-normal placeholder:text-gray-400   text-left font-bold   " type="text" placeholder="Add new task here" value={text}  onChange={(e)=>setText(e.target.value)}/>
            <button className="w-[65%] active:scale-95 hover:bg-blue-600 transition-all p-4 rounded-lg bg-blue-500 text-white text-2xl font-bold  " type="submit" > Add task </button>
        </form>
    )
}
export default AddTaskForm;