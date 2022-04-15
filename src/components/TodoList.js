import React from 'react'
import TodoListltem from './TodoListltem'
import '../styles/TodoList.scss';

    function TodoList({todos,onToggle,onRemove}) {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoListltem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}

export default TodoList