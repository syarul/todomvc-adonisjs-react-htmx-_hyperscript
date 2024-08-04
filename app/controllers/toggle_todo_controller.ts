import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'
import { TodoItemProps } from '../../types/index.js'
import TodoService from '#services/todo_service'
import { TodoItem } from '../../resources/components/todo_item.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class ToggleTodoController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  async patch(ctx: HttpContext): Promise<string> {
    const { id, completed } = ctx.request.qs()
    let done: boolean = false
    try {
      done = JSON.parse(completed)
    } catch (e) {
      throw new Error('unparsed completed')
    }
    const todo = await this.todo.toggle(id, !done)
    const props: TodoItemProps = {
      todo,
      filterName: this.filter.selectedFilter(),
    }
    return renderComponent(ctx, TodoItem, props)
  }
}
