import { Message } from "./Message"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => 
{

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const {username, email, password} = formState

    // useEffect( () => 
    // {
    //     // console.log('useEffect called');
    // }, [])

    // useEffect( () => 
    // {
    //     // console.log('useEffect called when FormState has been changed');
    // }, [formState])

    // useEffect( () => 
    // {
    //     // console.log('useEffect called when EMAIL has been changed');
    // }, [email])

    return (
        <>
            <h1>Formulario con CustomHook</h1>
            <hr />

            <input type='text' className='form-control' placeholder='Username' name='username' value={username} onChange={onInputChange}/>
            <input type='email' className='form-control mt-4' placeholder='test@google.com' name='email' value={email} onChange={onInputChange}/>
            <input type='password' className='form-control mt-4' placeholder='Contraseña' name='password' value={password} onChange={onInputChange}/>

            {
                (username === 'strider2') && <Message />
            }

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>

        </>
    )
}
