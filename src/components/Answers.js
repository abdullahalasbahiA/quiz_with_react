import React from "react"

function Answers(props){
 
    return (
        <div >
            {props.answers.map(a => <><span>{a}</span><br/></>)}
        </div>
    )
}

export default Answers;