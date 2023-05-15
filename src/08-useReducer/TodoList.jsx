import { TodoItem } from "./TodoItem"

export const TodoList = ({todoList = [], onDeleteTodo, onToggleTodo}) => 
{
    return (
        <ul className="list-group">
        {
            todoList.map( (todo) =>
                ( <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} /> )
            )
        }
        </ul>
    )
}
