import PropTypes from 'prop-types'

export const Quote = ({name, sprites}) => {
    return (
        <blockquote className="blokquote text-start">
            <img className="mb-2" src={sprites?.front_default} width={100} height={100} />
            <footer className="blockquote-footer">{name}</footer>
        </blockquote>
    )
}

Quote.propTypes = 
{
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object.isRequired,
}
