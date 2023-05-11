import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => 
{
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@google.com',
    })

    const {username, email} = formState

    const onInputChange = ({target}) => 
    {
        const {name, value} = target

        setFormState({
            ...formState, 
            [name]: value
        })
    }

    useEffect( () => 
    {
        // console.log('useEffect called');
    }, [])

    useEffect( () => 
    {
        // console.log('useEffect called when FormState has been changed');
    }, [formState])

    useEffect( () => 
    {
        // console.log('useEffect called when EMAIL has been changed');
    }, [email])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type='text' className='form-control' placeholder='Username' name='username' value={username} onChange={onInputChange}/>
            <input type='email' className='form-control mt-4' placeholder='test@google.com' name='email' value={email} onChange={onInputChange}/>

            {
                (username === 'strider2') && <Message />
            }

        </>
    )
}
