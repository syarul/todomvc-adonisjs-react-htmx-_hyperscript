import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'

@inject()
export default class RemoveTodoController {
  constructor(protected todo: TodoService) {}
  async delete({ request, response }: HttpContext): Promise<void> {
    const { id } = request.qs()
    await this.todo.remove(id)
    response.status(200).send('')
  }
}
