import React,{ useState, useEffect } from 'react'
import Comment from './Comment'


const Feedback = ({}) => {
    const [comments, setComments] = useState([]);
    var hasCalledAPI = false;
    var textarray = ["text block uno", "text block dos", "text block tres"]
    
    useEffect(async () => {
        getComments()
      }, []);
    

    

    console.log(Promise.resolve(comments))
    async function getComments(){
        const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
        //console.log(myJson);
        //console.log("------")
        //console.log(JSON.stringify(myJson));
        const isthisarray = myJson;
        let javascriptArray = []
         
        console.log(isthisarray);
        console.log(typeof isthisarray);
        setComments(myJson)

}

return (
        <div>
            {comments.map((x) => <Comment text={x} />)}
        </div>
    )
}

export default Feedback; 

