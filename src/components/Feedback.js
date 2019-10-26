import React from 'react'
import Comment from './Comment'

const Feedback = ({}) => {
const textarray = ["text block uno", "text block dos", "text block tres"]
return (
        <div>
            {textarray.map((x) => <Comment text={textarray[i]} />)}
        </div>
    )
}

export default Feedback; 