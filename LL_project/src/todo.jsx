import React,{Component} from "react";
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks:[],
            currenttask:""
        }
    }
    handlechange=(e)=>{
        this.setState({
            currenttask:e.target.value
        })
    }
    addtask=()=>{
        this.setState({
            tasks:[...this.state.tasks,this.state.currenttask],
            currenttask:""
        })
    }
    removetask=(index)=>{
        const newtasklist=this.state.tasks.filter((task,i)=>i!==index);
        this.setState({
            tasks:newtasklist
        })
    }
    render(){
        return(
            <>
            <h1>Todo List</h1>
            <input type="text" value={this.state.currenttask} onChange={this.handlechange} />
            <button onClick={this.addtask}>Add Task</button>
        <ul>
            {this.state.tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => this.removetask(index)}>Remove</button>
                </li>
            ))}
        </ul>
        </>
        )
    }
}
export default Todolist;