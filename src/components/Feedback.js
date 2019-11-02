import React from 'react'
import Comment from './Comment'

const Feedback = ({}) => {
var textarray = ["text block uno", "text block dos", "text block tres"]
return (
        <div>
            {textarray.map((x) => <Comment text={x} />)}
        </div>
    )
}

export default Feedback; 

