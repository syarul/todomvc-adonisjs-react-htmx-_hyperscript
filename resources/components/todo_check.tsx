import React from 'react'
import { TodoCheckProps } from '../../types/index.js'

export const TodoCheck: React.FC<TodoCheckProps> = ({ todo: { id, completed } }) => (
  <input
    className="toggle"
    type="checkbox"
    defaultChecked={completed}
    hx-patch={`/toggle-todo?id=${id}&completed=${completed}`}
    hx-target="closest <li/>"
    hx-swap="outerHTML"
    _="install TodoCheck"
  />
)
