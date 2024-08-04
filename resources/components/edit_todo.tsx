import React from 'react'
import { EditTodoProps } from '../../types/index.js'

export const EditTodo: React.FC<EditTodoProps> = ({ todo: { id, task, editing } }) => (
  <input
    className="edit"
    name="task"
    defaultValue={editing ? task : ''}
    todo-id={id}
    _="install TodoEdit"
  />
)
