import React from 'react'
import { PageProps } from '../../types/index.js'
import { ToggleMain } from './toggle_main.js'
import { TodoList } from './todo_list.js'
import { Footer } from './footer.js'

export const Page: React.FC<PageProps> = ({
  todos,
  filters,
  checked,
  hasCompleted,
  filterName,
}) => (
  <html lang="en" data-framework="htmx">
    <head>
      <meta charSet="utf-8" />
      <title>HTMX • TodoMVC</title>
      <link
        rel="stylesheet"
        href="https://unpkg.com/todomvc-common@1.0.5/base.css"
        type="text/css"
      />
      <link rel="stylesheet" href="https://unpkg.com/todomvc-app-css/index.css" type="text/css" />
      <script type="text/hyperscript" src="/hs/start-me-up._hs" />
      <script type="text/hyperscript" src="/hs/main._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/add-todo._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/toggle-main._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/toggle-footer._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/toggle-show._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/footer._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/toggle-all._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/clear-completed._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/destroy._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/todo-count._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/todo-dblclick._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/todo-check._hs" />
      <script type="text/hyperscript" src="/hs/behaviors/todo-edit._hs" />
    </head>
    <body>
      <section
        className="todoapp"
        _="
          install ToggleMain
          install ToggleFooter
          install ToggleShow
        "
      >
        <header className="header">
          <h1>todos</h1>
          <input
            id="add-todo"
            name="task"
            className="new-todo"
            placeholder="What needs to be done?"
            _="install AddTodo"
          />
        </header>
        <ToggleMain todos={todos} checked={checked} />
        <TodoList todos={todos} filterName={filterName} />
        <Footer todos={todos} filters={filters} hasCompleted={hasCompleted} />
      </section>
      <footer
        className="info"
        _="
          on load debounced at 10ms
            call startMeUp()
            hashCache()
        "
      >
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://github.com/syarul/">syarul</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
        <img src="https://htmx.org/img/createdwith.jpeg" width="250" height="auto" />
      </footer>
    </body>
    <script src="https://unpkg.com/todomvc-common@1.0.5/base.js" />
    <script src="https://unpkg.com/htmx.org@1.9.10" />
    <script src="https://unpkg.com/hyperscript.org/dist/_hyperscript.js" />
  </html>
)
