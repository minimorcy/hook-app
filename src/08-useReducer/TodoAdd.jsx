import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => 
{
    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onSubmit = (event) =>
    {
        event.preventDefault()

        if(description.length <= 1) return

        const newTodo = 
        {
            id: new Date().getTime() * 3,
            description: description,
            done: false,
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={(event) => onInputChange(event)}
            />

            <button className="btn btn-outline-primary mt-2" type="submit">
                Añadir TODO
            </button>
        </form>
    )
}
