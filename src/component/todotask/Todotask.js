import React,{useState} from "react";
import './Todotask.css'

const TodoTask = (props) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleClick = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      let newCompletedTasks = [...prevCompletedTasks];
      newCompletedTasks[index] = !newCompletedTasks[index];
      return newCompletedTasks;
    });
  };

  return (
    <>
      <ul className="ul1">
        {props.items.map((items, index) => (
          <div className="taskss">
            <li
              id={props.index1}
              key={index}
              className={completedTasks[index] ? "completed" : ""}
            >
              {items}
            </li>
            <div>
              <button onClick={props.deleteTask.bind(this, index)} className="deletebtn">
                Delete
              </button>
              <button onClick={() => handleClick(index)} className="deletebtn completebtn">
                Complete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoTask;
