import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => 
{
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('Debe regresar el estado inicial', () => 
    {
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)
    })

    test('Debe de agregar un todo', () => 
    {
        const action = 
        {
            type: '[TODO] Add Todo',
            payload: 
            {
                id: 1,
                description: 'Nuevo Todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    })

    test('Debe de eliminar un todo', () => 
    {
        const action = 
        {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0)
    })

    test('Debe de marcar como completado un todo', () => 
    {
        const action = 
        {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action)
        console.log(initialState);
        expect(newState.length).toBe(1)
        expect(newState[0].done).toBeTruthy()
    })
});