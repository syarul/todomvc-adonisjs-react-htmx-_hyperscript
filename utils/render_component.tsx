import type { HttpContext } from '@adonisjs/core/http'
import React from 'react'
import { renderToString } from 'react-dom/server'

export function renderComponent(
  { response }: HttpContext,
  Component: React.FC<any>,
  props?: Record<string, any>
): string {
  const renderedString = renderToString(<Component {...(props || {})} />)
  // if string turn out as empty HTMX wont process it
  // since react may have something like {booleanCheck && <Element />}
  // this to allow DOM diffing still works on HTMX as React ask for
  // removal
  if (renderedString === '') {
    response.status(200).send('')
  }
  return renderedString
}
