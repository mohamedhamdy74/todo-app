import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
        
    }
});
store.subscribe(() => { 
    const state = store.getState()
    try { 
        localStorage.setItem("tasks",JSON.stringify(state.todo))
    } catch (error) {
        console.log("data save error",error);
     }
}
)
