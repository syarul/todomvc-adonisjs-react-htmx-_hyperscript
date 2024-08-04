import React from 'react'
import { TodoItemProps } from '../../types/index.js'
import classNames from 'classnames'
import { EditTodo } from './edit_todo.js'
import { TodoCheck } from './todo_check.js'

export const TodoItem: React.FC<TodoItemProps> = ({ todo, filterName }) => {
  const { id, task, completed, editing } = todo
  if (task === '') return ''
  return (!completed && filterName === 'Active') ||
    (completed && filterName === 'Completed') ||
    filterName === 'All' ? (
    <li
      id={`todo-${id}`}
      className={classNames('todo', { completed, editing })}
      _="on destroy my.querySelector('button').click()"
    >
      <div className="view">
        <TodoCheck todo={todo} />
        <label
          hx-trigger="dblclick"
          hx-patch={`/edit-todo?id=${id}`}
          hx-target="next input"
          hx-swap="outerHTML"
          _="install TodoDblclick"
        >
          {task}
        </label>
        <button
          className="destroy"
          hx-delete={`/remove-todo?id=${id}`}
          hx-trigger="click"
          hx-target="closest <li/>"
          hx-swap="outerHTML"
          _="install Destroy"
        />
      </div>
      <EditTodo todo={todo} />
    </li>
  ) : null
}
