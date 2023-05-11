import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({name, sprites}) => 
{
    const pReft = useRef()

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => 
    {
        const {height, width} = pReft.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [name])

    return (
        <>
            <blockquote className="blokquote text-start" style={{ display:'flex'}}>
                <img className="mb-2" src={sprites?.front_default} width={100} height={100} />
                <footer ref={pReft} className="blockquote-footer">{name}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

Quote.propTypes = 
{
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object.isRequired,
}
