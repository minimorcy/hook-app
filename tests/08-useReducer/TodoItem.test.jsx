import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <TodoItem />', () => 
{
    const todo = 
    {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onToggleTodoMock = jest.fn()
    const onDeleteTodoMock = jest.fn() 

    beforeEach(() => jest.clearAllMocks())

    test('Debe de mostrar el Todo PENDIENTE de completar', () => 
    {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} 
        />)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
    })

    test('Debe de mostrar el Todo COMPLETADO', () => 
    {
        todo.done = true

        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} 
        />)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
        
    })

    test('Span debe llamar al onToggle cuando se le de click', () => 
    {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} 
        />)
        
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('Span debe llamar al onDeleteToDo cuando se le de click', () => 
    {
        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock} 
        />)
        
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})