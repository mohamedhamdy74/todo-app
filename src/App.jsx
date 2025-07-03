
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import "./index.css";

function App() {
  return (
    < div className='bg-gradient-to-r from-purple-950 to-purple-600
     text-white w-full min-h-screen '>
      <div className='w-[95%] mx-auto text-center py-32 md:w-[70%]' >
      <h1 className='font-bold mx-auto  text-center text-5xl mb-6  text-'>My Tasks</h1>
        <TaskList />
      <AddTaskForm />
      </div>
    
      </div>
  );
}

export default App;
