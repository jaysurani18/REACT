import React, { Component } from "react";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputvalue: "",
        };
    }

    handleinput = (e) => {
        this.setState({ inputvalue: e.target.value });
    };

    addtodo = () => {
        if (this.state.inputvalue.trim() === "") return;
        const newtodo =
        {
            id: Date.now(),
            text: this.state.inputvalue,
        };

        this.setState((prevState) => ({
            todos: [...prevState.todos, newtodo],
            inputvalue: "",
        }));
    };

    deleteTodo = (id) => {//delete todo function
        this.setState((prevState) => ({
            todos: prevState.todos.filter((x) => x.id !== id),//deleting the todo with the given id
        }));
    }

    render() {
        const { todos, inputvalue } = this.state;
        return (
            <>
                     <input type="text" value={inputvalue} onChange={this.handleinput} />
                <br />
                <button onClick={this.addtodo}>Add</button>
                <ul>
                    {
                        todos.map((x) => {
                            return <li
                                key={x.id}>
                                <input type="checkbox" value={x.completed} />{x.text}
                                <button onClick={() => this.deleteTodo(x.id)}>delete</button> </li>;
                        })
                    }
                </ul>
            </>
        );
    }
}

export default Todolist;