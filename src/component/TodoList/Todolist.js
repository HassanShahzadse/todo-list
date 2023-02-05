import React,{useState} from "react";
import TodoTask from "../todotask/Todotask";
 
class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task : '',
            items: []
        }

    }
    updateTask= (event) =>{
        this.setState({task : event.target.value})
        }
        updateDesc= (event) =>{
            this.setState({task2 : event.target.value})
            }
            onDeleteHandler=index=>{
                const deleteTask=[...this.state.items];
                deleteTask.splice(index,1);
                this.setState({
                    items:deleteTask
                });
            };
            AddTaskHandler=(event)=>{
                event.preventDefault();
                this.setState({
                    task : '',
                    items:[...this.state.items, this.state.task]
                })
                
                // console.log('Your input value is: ' + this.state.task)
                // console.log('Your input value is: ' + this.state.task2)
                // const tit = this.state.task  
                // const des = this.state.task2
            
                    }
  
    render()
    {
    return(
        <>
        
       <input className="InputTask" value={this.state.task} onChange={this.updateTask}></input>
        <input className="InputDescription" onChange={this.updateDesc}></input>
        <button className="AddTask" onClick={this.AddTaskHandler}>Add Task</button>
         <TodoTask deleteTask={this.onDeleteHandler} items={this.state.items} />
        </>
       
        )
    }
}
export default Todolist;