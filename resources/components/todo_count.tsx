import React from 'react'
import { TodoCountProps } from '../../types/index.js'

export const TodoCount: React.FC<TodoCountProps> = ({ uncompletedCount, plural }) => (
  <>
    <strong>{uncompletedCount}</strong> item{plural} left
  </>
)
