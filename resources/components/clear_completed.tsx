import React from 'react'
import { ClearCompletedProps } from '../../types/index.js'

export const ClearCompleted: React.FC<ClearCompletedProps> = ({ hasCompleted }) =>
  hasCompleted ? (
    <button className="clear-completed" _="install ClearCompleted">
      Clear completed
    </button>
  ) : null
