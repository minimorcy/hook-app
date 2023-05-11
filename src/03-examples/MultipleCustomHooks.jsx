import { useCounter, useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"

export const MultipleCustomHooks = () => 
{
    const {counter, increment, decrement} = useCounter(1)

    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    const { name, sprites } = !!data && data

    return (
        <>
            <h1>Pokemon</h1>
            <hr />

            {
                (isLoading) 
                ? <LoadingQuote />
                : <Quote name={name} sprites={sprites} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => decrement()}>Last Pokemon</button>
            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>Next Pokemon</button>
        </>
    )
}
