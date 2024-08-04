declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    // extends React's HTMLAttributes for HTMX
    _?: string
    __?: string
    after?: string
  }
}

export interface Filter {
  url: '#/' | '#/active' | '#/completed'
  name: 'All' | 'Active' | 'Completed'
  selected: boolean
}

export interface Todo {
  id: number
  task: string
  completed: boolean
  editing: boolean
}

export type Action = 'Create' | 'Update' | 'Delete'

export interface PageProps {
  todos: Todo[]
  filters: Filter[]
  checked: boolean
  hasCompleted: boolean
  filterName: string
}

export interface ToggleMainProps {
  todos: Todo[]
  checked: boolean
}

export interface TodoListProps {
  todos: Todo[]
  filterName: string
}

export interface TodoItemProps {
  todo: Todo
  filterName: string
}

export interface EditTodoProps {
  todo: Todo
}

export interface ToggleAllProps {
  checked: boolean
}

export interface FooterProps {
  todos: Todo[], 
  filters: Filter[], 
  hasCompleted: boolean
}

export interface FilterProps {
  filters: Filter[]
}

export interface ClearCompletedProps {
  hasCompleted: boolean
}

export interface TodoCheckProps {
  todo: Todo
}

export interface TodoCountProps {
  uncompletedCount: number
  plural: String
}