
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}]

const todoReducer = (state = initialState, action = {}) =>
{
    if(action.type === '[TODO] Add todo')
        return [...state, action.payload]

    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra de Poder',
    done: false
}

console.log(todos);

const addTodoAction = 
{
    type: '[TODO] Add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log(todos);