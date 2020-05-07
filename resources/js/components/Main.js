
import ReactDOM from 'react-dom';
import React, { useState } from "react";

function Todo({ todo, index, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button className="btn btn-danger  btn-xs" onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input track mt-2"
                value={value}
                placeholder="Search Track"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

const Main = () => {

    const [todos, setTodos] = useState([
        {
            text: "Cure - The Funeral Party"
        },
        {
            text: "Joy Division - Decades"
        },
        {
            text: "Nick Cave and the Bad Seeds - Into my arms"
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };


    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (

        <div className="col-md-12 mt-5">
            <div className="card ">
                <div className="card-header text-white bg-dark">Playlist React Component</div>

                <div className="card-body playlist-body">

                    <div className="app">
                        <div className="todo-list">
                            {todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    removeTodo={removeTodo}
                                />
                            ))}
                            <TodoForm addTodo={addTodo} />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Main



if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
