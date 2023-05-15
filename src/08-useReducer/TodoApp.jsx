import { TodoList, TodoAdd } from "."
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => 
{
    const {todos, todosCount, pendingTodosCount, onDeleteTodo, onToggleTodo, onNewTodo} = useTodo()

    return (
        <>
            <h1>TodoApp: ({todosCount}) - <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todoList={todos} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    )
}
