import React from "react";

function Answer(props){

    const [allAnswers, setAllAnswers] = React.useState(props.answersArray.map(answer => {
        return ({text: answer, isHold: false, id: Math.random()})}))

    // console.log(allAnswers)

    function chooseAnswer(id){
        // console.log(id)
        setAllAnswers(prevAnswers => {
            return (prevAnswers.map(answer => {
                // console.log(answer)
                // (answer.id === id) ? console.log("HELLLLLLLLLLLLLLLLo") : console.log("NOOOOO");
                // WRONG console.log(id.target)
                return (answer.id === id ) ? {...answer, isHold: !answer.isHold} : {...answer, isHold: false};
                // return (answer.id === id)?{...answer, isHold: false}:answer;
            }))
        })
    }

    

    return (
        <div className="answers">
            {allAnswers.map((answer) => {
                    return(
                        <span
                            onClick={() => chooseAnswer(answer.id)}
                            style={{backgroundColor: (answer.isHold) ? "black" : "white"}}>
                                {answer.text}
                        </span>)
                }
            )}
        </div>
    )
}

export default Answer;