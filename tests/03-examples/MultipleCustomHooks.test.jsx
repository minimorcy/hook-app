import { screen, render, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../../src/hooks";

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter')

describe('Pruebas en MultipleCustomHooks', () => 
{

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => jest.clearAllMocks())

    test('Mostrar el componente por defecto', () => 
    {
        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Pokemon'))

        const nextButton = screen.getByRole("button", {name: 'Next Pokemon'})
        expect(nextButton.disabled).toBeTruthy()
    });

    test('Debe de mostrar un pokemon', () => 
    {
        useFetch.mockReturnValue({
            data: {name: 'Pikachu', sprites: { front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png` }},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Pikachu')).toBeTruthy()
        expect(screen.getByRole("img", {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'})).toBeTruthy()
        
        const nextButton = screen.getByRole("button", {name: 'Next Pokemon'})
        expect(nextButton.disabled).toBeFalsy()

    })

    test('Debe de llamar a la función de incrementar', () => 
    {
        

        useFetch.mockReturnValue({
            data: {name: 'Pikachu', sprites: { front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png` }},
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        
        const nextButton = screen.getByRole("button", {name: 'Next Pokemon'})
        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()
    })
})