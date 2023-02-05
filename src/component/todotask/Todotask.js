import React,{useState} from "react";

class TodoTask extends React.Component{
    
    render()
    {
    return(
        <>
        <ul>
            {this.props.items.map((items,index)=>(
                <li key={index} onClick={this.props.deleteTask.bind(this,index)}
            >
            {items}
            </li>
            ))}
        </ul>
       </>
        )
    }
}
export default TodoTask;