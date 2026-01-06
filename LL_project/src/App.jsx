import React,{ Component} from "react"; 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputvalue: '',
        };
    }
    handleinput = (e) => {
        this.setState({ inputvalue: e.target.value });
    }
    addtodo = () => {
        if(this.state.inputvalue.trim() === '') return;
        const newtodo = {
            id: Date.now(),
            title: this.state.inputvalue,
            completed: false,
        };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newtodo],
            inputvalue: "",
        }));
    }
    render() {
        const { todos, inputvalue } = this.state;
        return(
        <>
           <input type="text" value={inputvalue} onChange ={this.handleinput}/>
           <br />
        <button onClick={this.addtodo}>Add</button>
        <br />
        <ul>
            {
                todos.map((x) => (
                    <li key={x.id}>{x.title}</li>
                ))
            }
        </ul>
        </>
        )
    };
    }
export default TodoList;