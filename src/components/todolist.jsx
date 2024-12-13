import React from 'react';

const TodoList = ({ todos, deleteTodo, updateTodoStatus }) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <li
                key={todo.id}
                className={`todo-item ${getStatusStyle(todo.statut)}`}
            >
                <span>{todo.text}</span>
                <select
                    value={todo.statut}
                    onChange={(e) => updateTodoStatus(todo.id, e.target.value)}
                    className="todo-status-select"
                >
                    <option value="À faire">À faire</option>
                    <option value="En cours">En cours</option>
                    <option value="Terminé">Terminé</option>
                </select>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-btn"
                >
                    Supprimer
                </button>
            </li>
        ))}
    </ul>
);

const getStatusStyle = (status) => {
    switch (status) {
        case 'À faire':
            return 'todo-status-todo';
        case 'En cours':
            return 'todo-status-in-progress';
        case 'Terminé':
            return 'todo-status-done';
        default:
            return '';
    }
};

export default TodoList;