/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { readFileSync } from 'node:fs'

const PageController = () => import('#controllers/page_controller')

const SetHashController = () => import('#controllers/set_hash_controller')
const TodoJsonController = () => import('#controllers/todo_json_controller')
const FooterController = () => import('#controllers/footer_controller')
const AddTodoController = () => import('#controllers/add_todo_controller')
const TodoItemController = () => import('#controllers/todo_item_controller')
const UpdateCountController = () => import('#controllers/update_count_controller')
const ToggleTodoController = () => import('#controllers/toggle_todo_controller')
const CompletedController = () => import('#controllers/completed_controller')
const ToggleAllController = () => import('#controllers/toggle_all_controller')
const ToggleMainController = () => import('#controllers/toggle_main_controller')
const EditTodoController = () => import('#controllers/edit_todo_controller')
const UpdateTodoController = () => import('#controllers/update_todo_controller')
const RemoveTodoController = () => import('#controllers/remove_todo_controller')
const SwapJsonController = () => import('#controllers/swap_json_controller')

router.get('/', [PageController, 'get'])

router.get('/set-hash', [SetHashController, 'get'])
router.get('/todo-json', [TodoJsonController, 'get'])
router.get('/footer', [FooterController, 'get'])
router.get('/add-todo', [AddTodoController, 'get'])
router.get('/todo-item', [TodoItemController, 'get'])
router.get('/update-count', [UpdateCountController, 'get'])
router.patch('/toggle-todo', [ToggleTodoController, 'patch'])
router.get('/completed', [CompletedController, 'get'])
router.get('/toggle-all', [ToggleAllController, 'get'])
router.get('/toggle-main', [ToggleMainController, 'get'])
router.patch('/edit-todo', [EditTodoController, 'patch'])
router.get('/update-todo', [UpdateTodoController, 'get'])
router.delete('/remove-todo', [RemoveTodoController, 'delete'])
router.get('/swap-json', [SwapJsonController, 'get'])

// serve axe-core for cypress testing
router.get('/node_modules/axe-core/axe.min.js', async ({ response }) => {
  try {
    const fileContent = await readFileSync(
      'cypress-example-todomvc/node_modules/axe-core/axe.min.js',
      'utf-8'
    )
    response.header('Content-Type', 'application/javascript')
    response.send(fileContent)
  } catch (error) {
    response.status(404).send('File not found')
  }
})
