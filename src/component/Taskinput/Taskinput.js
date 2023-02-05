import React from "react";
import TodoTask from "../todotask/Todotask"
class TaskInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task : ''
        }

    }
    
    updateTask= (event) =>{
        this.setState({task : event.target.value})
        }

    updateDesc= (event) =>{
        this.setState({task2 : event.target.value})
        }
        AddTaskHandler=()=>{
        console.log('Your input value is: ' + this.state.task)
        console.log('Your input value is: ' + this.state.task2)
        // const tit = this.state.task  
        // const des = this.state.task2
    
            }
    render(){
        return(
            <>
            <input className="InputTask" onChange={this.updateTask}></input>
            <input className="InputDescription" onChange={this.updateDesc}></input>
            <button className="AddTask" onClick={this.AddTaskHandler}>Add Task</button>
            
            
            </>
        );
}
}
export default TaskInput;