import React from "react"
import "./styles/App.css"
import Answer from "./Answer"
import shuffle from "./shuffle"
import PlayAgainButton from "./PlayAgainButton";

function App(){
    
    const [questions, setQuestions] = React.useState();
    // const [startingQuiz, setStartingQuiz] = React.useState(true);
    
    
    React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5&category=18")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
    }, [])
    
    return (
        <main>
        <div className="quiz-welcome-screen">
            {/*<pre>{JSON.stringify(questions, null, 4)}</pre>*/}
            {/* If there is Any (questions) && Do what you have to do */}
            {questions && questions.map(function(result) { // MAP MAP MAP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                const answersArray = []; // empty array to but all the answers in
                const correctAnswer = result.correct_answer; // correct answers in a constant
                const incorrectAnswersArray = result.incorrect_answers; // the array of incorrect answers
                answersArray.push(correctAnswer); // push the correct answer to the empty array
                answersArray.push(...incorrectAnswersArray); // but the rest of the answers to the array
                shuffle(answersArray); // shuffle the array
                return (
                    <div className="container">
                        <div key={Math.random()} className="question">{result.question}</div>
                        <Answer key={Math.random()} answersArray={answersArray}/>
                    </div>
                    )
                })}
                <PlayAgainButton />
            </div>
            
        </main>
    )
}

export default App;




