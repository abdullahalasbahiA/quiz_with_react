import React from "react";

function Answer(props){

    const [allAnswers, setAllAnswers] = React.useState(props.answersArray.map(answer => {
        return ({text: answer, isHold: false, id: Math.random()})}))

        console.log(props.answersArray)

    let choise = ['','','','',''];
    function mapOverAnswers(){
        // console.log("hello")
        choise = allAnswers;
        console.log(choise)
    }
    // mapOverAnswers()

    function chooseAnswer(id){
        setAllAnswers(prevAnswers => {
            return (prevAnswers.map(answer => {
                return (answer.id === id ) ? {...answer, isHold: !answer.isHold} : {...answer, isHold: false};
            }))
        })
    }

    return (
        <div className="answers">
            {allAnswers.map((answer) => {
                return(
                    <span onClick={() => {chooseAnswer(answer.id)}}
                          style={{backgroundColor: (answer.isHold) ? "black" : "white"}}>{answer.text}
                    </span>)
                }
            )}
        </div>
    )
}
export default Answer;