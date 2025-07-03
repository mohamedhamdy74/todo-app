import { createSlice } from "@reduxjs/toolkit";
const dataFromLs = () => {
    try {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            return JSON.parse(tasks);
        } else {
            return [];
        }
    }catch (error) {
        return [];
    }
}
const todoSlice = createSlice({
    name:"todo",
    initialState: dataFromLs(),
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTask: (state, action) => { 
            const task = state.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            };
        },
        deleteTask: (state, action) => { 
            return state.filter((t) => t.id !== action.payload);
        }
    }
})
export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;