import React, {useState} from 'react';

export default function TodoList() {
    const initialTodos = [
        {id: 1, title: "Apprendre React", completed: false},
        {id: 2, title: "Lire la Doc", completed: false},
        {id: 3, title: "Continuer de lire la doc", completed: false}
    ]

    const [todos, setTodos] = useState(initialTodos)
    const checkUncheck = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };


    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => checkUncheck(todo.id)}
                    />
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}



