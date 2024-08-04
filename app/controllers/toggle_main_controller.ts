import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import TodoService from '#services/todo_service'
import { ToggleMainProps } from '../../types/index.js'
import { ToggleMain } from '../../resources/components/toggle_main.js'
import { renderComponent } from '../../utils/render_component.js'

@inject()
export default class ToggleMainController {
  constructor(protected todo: TodoService) {}
  get(ctx: HttpContext): string {
    const props: ToggleMainProps = {
      todos: this.todo.get(),
      checked: this.todo.defChecked(),
    }
    return renderComponent(ctx, ToggleMain, props)
  }
}
