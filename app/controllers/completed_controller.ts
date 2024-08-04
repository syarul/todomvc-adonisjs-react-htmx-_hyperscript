import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import { ClearCompletedProps } from '../../types/index.js'
import { ClearCompleted } from '../../resources/components/clear_completed.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class CompletedController {
  constructor(protected todo: TodoService) {}
  get(ctx: HttpContext): any {
    const props: ClearCompletedProps = {
      hasCompleted: this.todo.hasCompleted(),
    }
    return renderComponent(ctx, ClearCompleted, props)
  }
}
