import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import FilterService from '#services/filter_service'
import { Page } from '../../resources/components/page.js'
import { PageProps } from '../../types/index.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class PageController {
  constructor(
    protected filter: FilterService,
    protected todo: TodoService
  ) {}
  get(ctx: HttpContext): string {
    // initializers
    ctx.session.commit()
    this.filter.init()
    this.todo.initIndex()

    const props: PageProps = {
      todos: this.todo.get(),
      filters: this.filter.get(),
      checked: this.todo.defChecked(),
      hasCompleted: this.todo.hasCompleted(),
      filterName: this.filter.selectedFilter(),
    }
    return renderComponent(ctx, Page, props)
  }
}
