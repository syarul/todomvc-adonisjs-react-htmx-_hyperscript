import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FilterService from '#services/filter_service'

@inject()
export default class SetHashController {
  constructor(protected filter: FilterService) {}
  get({ request }: HttpContext): string {
    const { name = 'All' } = request.qs()
    this.filter.setSelected(name)
    return '' // nothing change on htmx send empty string
  }
}
