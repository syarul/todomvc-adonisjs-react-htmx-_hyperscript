import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import { renderComponent } from '../../utils/render_component.js'
import { TodoCountProps } from '../../types/index.js'
import { TodoCount } from '../../resources/components/todo_count.js'

@inject()
export default class UpdateCountController {
  constructor(protected todo: TodoService) {}
  get(ctx: HttpContext): string {
    const uncompletedCount = this.todo.countNotDone()
    const props: TodoCountProps = {
      uncompletedCount,
      plural: uncompletedCount !== 1 ? 's' : '',
    }
    return renderComponent(ctx, TodoCount, props)
  }
}
