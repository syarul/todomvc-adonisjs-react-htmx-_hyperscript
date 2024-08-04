import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'
import TodoService from '#services/todo_service'
import { TodoItemProps } from '../../types/index.js'
import { TodoItem } from '../../resources/components/todo_item.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class UpdateTodoController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  async get(ctx: HttpContext): Promise<string> {
    const { id, task } = ctx.request.qs()
    const todo = await this.todo.update(id, task)
    const props: TodoItemProps = {
      todo,
      filterName: this.filter.selectedFilter(),
    }
    return renderComponent(ctx, TodoItem, props)
  }
}
