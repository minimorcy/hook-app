import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el use counter', () => 
{
    test('Debe de retornar los valores por defecto ', () => 
    {
        const {result} = renderHook(() => useCounter())
        const {counter, increment, decrement, reset} = result.current

        expect(counter).toBe(10)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    });
    
    test('Debe generar el counter con el valor de 100', () => 
    {
        const {result} = renderHook(() => useCounter(100))
        const {counter} = result.current

        expect(counter).toBe(100)
    });

    test('Probando la función increment', () => 
    {
        const {result} = renderHook(() => useCounter())
        const {counter, increment} = result.current

        act(() => 
        {
            increment()
            increment(2)
        })

        expect(result.current.counter).toEqual(13)
    });

    test('Probando la función decrement', () => 
    {
        const {result} = renderHook(() => useCounter())
        const {counter, decrement} = result.current

        act(() => 
        {
            decrement()
            decrement(2)
        })

        expect(result.current.counter).toEqual(7)
    });

    test('Probando la función reset', () => 
    {
        const {result} = renderHook(() => useCounter())
        const {counter, increment, decrement, reset} = result.current

        act(() => 
        {
            increment()
            decrement(2)
            reset()
        })

        expect(result.current.counter).toEqual(10)
    });
});