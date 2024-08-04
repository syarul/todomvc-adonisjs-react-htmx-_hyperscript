import React from 'react'
import { ToggleAllProps } from '../../types/index.js'

export const ToggleAll: React.FC<ToggleAllProps> = ({ checked }) => (
  <input
    id="toggle-all"
    className="toggle-all"
    type="checkbox"
    defaultChecked={checked}
    _="install ToggleAll"
  />
)
