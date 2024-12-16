import React, { useState, useEffect } from 'react';
import TodoList from './components/todolist.jsx';
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './app.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

const LSKEY = 'MyTodoApp.todos';

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem(LSKEY);
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: inputValue,
                    statut: 'À faire' // Statut par défaut
                }
            ]);
            setInputValue('');
        }
    };

    const updateTodoStatus = (id, newStatus) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, statut: newStatus }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        localStorage.setItem(LSKEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="todo-container">
            <h1>Liste de Tâches</h1>

            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ajouter une nouvelle tâche"
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>
                    Ajouter
                </button>
            </div>

            <TodoList todos={todos} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus} />
        </div>
    );
}

export default App;