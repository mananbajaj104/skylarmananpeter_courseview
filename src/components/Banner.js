import React from 'react'
import Toggle from './Toggle'

const Banner = ({className}) => {
    return (
        <div>
            <h1>{className}</h1>
             <Toggle />
        </div>
    )
}

export default Banner;