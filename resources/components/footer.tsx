import React from 'react'
import { FooterProps } from '../../types/index.js'
import { FilterComponent } from './filter.js'
import { ClearCompleted } from './clear_completed.js'

export const Footer: React.FC<FooterProps> = ({ todos, filters, hasCompleted }) =>
  todos.length > 0 && (
    <footer className="footer" _="install Footer">
      <span className="todo-count" hx-trigger="load" _="install TodoCount" />
      <FilterComponent filters={filters} />
      <ClearCompleted hasCompleted={hasCompleted} />
    </footer>
  )
