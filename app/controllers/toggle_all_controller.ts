import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'

@inject()
export default class ToggleAllController {
  constructor(protected todo: TodoService) {}
  get(): boolean {
    return this.todo.defChecked()
  }
}
