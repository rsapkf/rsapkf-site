import React from 'react'
import spinner from '../img/grid.svg'

const Spinner = () => {
    return (
        <>
            <img
                src={spinner}
                style={{ width: '35px', margin: 'auto', display: 'block' }}
                alt='Loading'
            />
        </>
    )
}

export default Spinner