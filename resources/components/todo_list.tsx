import React from 'react'
import { Todo, TodoListProps } from '../../types/index.js'
import { TodoItem } from './todo_item.js'

export const TodoList: React.FC<TodoListProps> = ({ todos, filterName }) =>
  todos.length > 0 ? (
    <ul className="todo-list" _="on load set $todo to me">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} filterName={filterName} />
      ))}
    </ul>
  ) : null
