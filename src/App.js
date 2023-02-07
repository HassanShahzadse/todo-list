import './App.css';
import Todolist from './component/TodoList/Todolist';
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
