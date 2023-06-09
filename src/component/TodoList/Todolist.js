import React,{useState} from "react";
import TodoTask from "../todotask/Todotask";
import './TodoList.css';
 
class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task : '',
            items: []
        }

    }
componentDidUpdate(Props,prevStates){
    const json = JSON.stringify(this.state.items)
    localStorage.setItem('items',json)
}
componentDidMount(){
    const json = localStorage.getItem('items')
    const TodoList=JSON.parse(json)
    this.setState({ items: TodoList || [] });
}

    
    updateTask= (event) =>{
        this.setState({task : event.target.value})
        }

    onDeleteHandler=index=>{
    const deleteTask=[...this.state.items];
    deleteTask.splice(index,1);
    this.setState({
        items:deleteTask
    });
    };

    onComplete = index1 => {
        document.getElementById(index1.toString()).classList.add("Line");
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
        
        <div className="Form">
        <div className="Input">
       <input className="InputTask" value={this.state.task} onChange={this.updateTask}></input>
        <button className="AddTask" onClick={this.AddTaskHandler}>Add Task</button>
        </div>
         <TodoTask deleteTask={this.onDeleteHandler} items={this.state.items}/>
         </div>
        </>
       
        )
    }
}
export default Todolist;