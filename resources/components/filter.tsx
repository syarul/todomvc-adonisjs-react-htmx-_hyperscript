import React from 'react'
import { Filter, FilterProps } from '../../types/index.js'
import classNames from 'classnames'

export const FilterComponent: React.FC<FilterProps> = ({ filters }) => (
  <ul className="filters" _="on load set $filter to me">
    {filters.map(({ url, name, selected }: Filter) => (
      <li key={name}>
        <a className={classNames({ selected })} href={url} _="on click add .selected to me">
          {name}
        </a>
      </li>
    ))}
  </ul>
)
