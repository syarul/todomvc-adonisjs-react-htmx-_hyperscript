import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'

@inject()
export default class SwapJsonController {
  constructor(protected todo: TodoService) {}
  get({ request }: HttpContext): string {
    const { all } = request.qs()
    this.todo.toggleCompleted(all)
    return '\n'
  }
}
