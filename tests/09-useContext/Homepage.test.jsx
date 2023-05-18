import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el componente <HomePage />', () => 
{
    const user =
    {
        id: 1,
        name: 'Julio'
    }

    test('debe mostrar el componente SIN el usuario', () => 
    {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toBe('null')
    })

    test('debe mostrar el componente CON el usuario', () => 
    {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).not.toBe('null')
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())
    })
});