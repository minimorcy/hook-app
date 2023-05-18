import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el componente <LoginPage />', () => 
{
    const user =
    {
        id: 123, 
        name: 'Juan', 
        email: 'juan@google.com'
    }

    test('debe mostrar el componente SIN el usuario', () => 
    {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de llamar el setUser cuando se hace click en el boton', () => 
    {

        const setUserMock = jest.fn()
        
        render(
            <UserContext.Provider value={{user: user, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith(
            {
                id: 123, 
                name: 'Juan', 
                email: 'juan@google.com'
            }
        )
    })
});