import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'
import TodoService from '#services/todo_service'
import { TodoItemProps, TodoListProps } from '../../types/index.js'
import { TodoItem } from '../../resources/components/todo_item.js'
import { TodoList } from '../../resources/components/todo_list.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class AddTodoController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  async get(ctx: HttpContext): Promise<string> {
    const { task = '' } = ctx.request.qs()
    if (task.length === 0) {
      return '' // this will not trigger anything usually
    }
    const todo = await this.todo.add(task)
    const todos = this.todo.get()
    if (todos.length === 1) {
      const props: TodoListProps = {
        todos,
        filterName: this.filter.selectedFilter(),
      }
      return renderComponent(ctx, TodoList, props)
    }
    const props: TodoItemProps = {
      todo,
      filterName: this.filter.selectedFilter(),
    }
    return renderComponent(ctx, TodoItem, props)
  }
}
