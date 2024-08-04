import React from 'react'
import { ToggleMainProps } from '../../types/index.js'
import { ToggleAll } from './toggle_all.js'

export const ToggleMain: React.FC<ToggleMainProps> = ({ todos, checked }) =>
  (todos.length > 0 && (
    <section className="main" _="on load set $sectionMain to me">
      <ToggleAll checked={checked} />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </section>
  )) ||
  null
