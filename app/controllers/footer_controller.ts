import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'
import TodoService from '#services/todo_service'
import { FooterProps } from '../../types/index.js'
import { Footer } from '../../resources/components/footer.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class FooterController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  get(ctx: HttpContext): string {
    const props: FooterProps = {
      todos: this.todo.get(),
      filters: this.filter.get(),
      hasCompleted: this.todo.hasCompleted(),
    }
    return renderComponent(ctx, Footer, props)
  }
}
