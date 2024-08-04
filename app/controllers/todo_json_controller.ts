import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import { Todo } from '../../types/index.js'

@inject()
export default class TodoJsonController {
  constructor(protected todo: TodoService) {}
  get({ request }: HttpContext): Todo[] | string[] {
    const { only } = request.qs()
    if (only === 'id') {
      return this.todo.get().map((i) => i.id.toString())
    }
    return this.todo.get()
  }
}
