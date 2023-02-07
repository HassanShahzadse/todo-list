import React,{useState} from "react";
import './Todotask.css'

class TodoTask extends React.Component{

    render()
    {
    return(
        <>
        <ul className="ul1">
            {this.props.items.map((items,index)=>(
                <div className="taskss">
                <li key={index}>
                
            {items}
            </li>
            <div>
            <button onClick={this.props.deleteTask.bind(this,index)} className="deletebtn">Delete</button>
            <button className="deletebtn completebtn">Complete</button></div>
            </div>
            ))}
        </ul>
       </>
        )
    }
}
export default TodoTask;