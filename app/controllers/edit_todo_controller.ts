import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import { EditTodoProps } from '../../types/index.js'
import { EditTodo } from '../../resources/components/edit_todo.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class EditTodoController {
  constructor(protected todo: TodoService) {}
  patch(ctx: HttpContext): string {
    const { id } = ctx.request.qs()
    const todo = this.todo.getTodo(id)
    const props: EditTodoProps = {
      todo: {
        ...todo,
        editing: true,
      },
    }
    return renderComponent(ctx, EditTodo, props)
  }
}
