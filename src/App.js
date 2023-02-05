import './App.css';
import TaskInput from "./component/Taskinput/Taskinput"
import Todolist from './component/TodoList/Todolist';
import TodoTask from './component/todotask/Todotask';
function App() {
  return (
    <div className='maindiv'>
      <h1>Todo List</h1>
      {/* <TaskInput /> */}
      <Todolist />
      
    </div>
  );
}

export default App;
