import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class FormatMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    const query = request.qs()
    if (query.id && !Number.isNaN(Number(query.id))) {
      query.id = Number(query.id)
    }
    if (query.all) {
      try {
        query.all = JSON.parse(query.all)
      } catch (e) {
        query.all = false
      }
    }
    // always trim task
    if (query.task !== undefined) {
      query.task = query.task.trim()
    }
    return next()
  }
}
