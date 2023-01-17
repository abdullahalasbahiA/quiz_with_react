


import React from "react";
import "./styles/App.css";

function App() {

    const [questions, setQuestions] = React.useState();

    React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=18")
      .then(res => res.json())
      .then(data => setQuestions(data))
    }, [])
    
    console.log("hello")    
    console.log("hello")    

    // questions.results.map(result => {
    //     console.log(result.question)
    // })
    let result = null;
    if(questions){
      result = questions.results;
    }

    console.log("Hesllo")
    console.log(result)

    return (
        <main className="quiz-container">
            
        </main>
    );
}

export default App;