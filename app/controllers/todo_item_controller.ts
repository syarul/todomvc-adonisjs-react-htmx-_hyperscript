import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'
import TodoService from '#services/todo_service'
import { TodoItemProps } from '../../types/index.js'
import { TodoItem } from '../../resources/components/todo_item.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class TodoItemController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  get(ctx: HttpContext): string {
    const { id } = ctx.request.qs()
    const todo = this.todo.getTodo(id)
    const props: TodoItemProps = {
      todo,
      filterName: this.filter.selectedFilter(),
    }
    return renderComponent(ctx, TodoItem, props)
  }
}
