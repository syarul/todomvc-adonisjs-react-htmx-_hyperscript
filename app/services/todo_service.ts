import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Action, Todo } from '../../types/index.js'

const defaultTodo: Todo = {
  id: 0,
  task: 'task 1',
  completed: false,
  editing: false,
}

// memory storage
const m = new Map()
const indices = new Map()

@inject()
export default class TodoService {
  queue: any[]
  locked: boolean
  constructor(private ctx: HttpContext) {
    this.queue = []
    this.locked = false
  }
  initIndex(): void {
    indices.set(this.ctx.session.sessionId, 0)
  }
  getLock(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!this.locked) {
        this.locked = true
        resolve()
      } else {
        this.queue.push(resolve)
      }
    })
  }
  releaseLock(): void {
    if (this.queue.length > 0) {
      const nextResolve = this.queue.shift()
      nextResolve()
    } else {
      this.locked = false
    }
  }
  get(): Todo[] {
    return m.get(this.ctx.session.sessionId) || []
  }
  async put(action: Action, todo: Todo): Promise<Todo> {
    // this to simulate write lock mechanism
    await this.getLock()
    let todos = this.get()
    const index = todos.findIndex((i) => i.id === todo.id)
    switch (action) {
      case 'Create':
        todos.push(todo)
        break
      case 'Update':
        if (~index) {
          if (todo.task === '') {
            todos.splice(index, 1)
          } else {
            todos[index] = todo
          }
        }
        break
      case 'Delete':
        if (~index) {
          todos.splice(index, 1)
        }
        break
      default:
    }
    m.set(this.ctx.session.sessionId, todos)
    this.releaseLock()
    return todo
  }
  getIndex(): number {
    return indices.get(this.ctx.session.sessionId)
  }
  setIndex(index: number): void {
    indices.set(this.ctx.session.sessionId, index)
  }
  async add(task: string): Promise<Todo> {
    let index = this.getIndex()
    index++
    this.setIndex(index)
    const todo: Todo = {
      id: index,
      task,
      completed: false,
      editing: false,
    }
    return this.put('Create', todo)
  }
  countNotDone(): number {
    return this.get().reduce((acc, curr) => acc + (curr.completed ? 0 : 1), 0)
  }
  defChecked(): boolean {
    const uncompletedCount = this.countNotDone()
    let defaultChecked: boolean = false
    if (uncompletedCount === 0 && this.get().length > 0) {
      defaultChecked = true
    }
    return defaultChecked
  }
  hasCompleted(): boolean {
    for (const { completed } of this.get()) {
      if (completed) {
        return true
      }
    }
    return false
  }
  getTodo(id: number): Todo {
    return this.get().find((todo) => todo.id === id) || defaultTodo
  }
  async toggle(id: number, completed: boolean): Promise<Todo> {
    return this.put('Update', { ...this.getTodo(id), completed })
  }
  async update(id: number, task: string): Promise<Todo> {
    return this.put('Update', { ...this.getTodo(id), task })
  }
  async remove(id: number): Promise<void> {
    await this.put('Delete', this.getTodo(id))
  }
  toggleCompleted(completed: boolean): void {
    m.set(
      this.ctx.session.sessionId,
      this.get().map((t) => ({
        ...t,
        completed,
      }))
    )
  }
  clearCompleted(): void {
    m.set(
      this.ctx.session.sessionId,
      this.get().filter((t) => !t.completed)
    )
  }
}
