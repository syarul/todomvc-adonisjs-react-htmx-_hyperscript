import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Filter } from '../../types/index.js'

@inject()
export default class FilterService {
  constructor(private ctx: HttpContext) {}
  init(): void {
    this.ctx.session.put('filters', [
      { url: '#/', name: 'All', selected: true },
      { url: '#/active', name: 'Active', selected: false },
      { url: '#/completed', name: 'Completed', selected: false },
    ])
  }
  get(): Filter[] {
    return this.ctx.session.get('filters')
  }
  setSelected(selectedName: string): void {
    this.get().map(({ url, name }) => ({
      url,
      name,
      selected: name === selectedName ? true : false,
    }))
  }
  selectedFilter(): string {
    for (const { name, selected } of this.get()) {
      if (selected) {
        return name
      }
    }
    return 'All'
  }
}
