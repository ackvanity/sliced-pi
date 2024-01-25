import Question from './Question';
import Report from './Report'
import Home from './Home'
import { default as React, useState } from 'react';

function App() {
  // TODO: Server-Side API
  const questions = [
    {
      question: "<p>What is 1+1?</p>",
      response1: "1",
      response2: "2",
      response3: "3",
      response4: "4",
      answerKey: 2
    },
    {
      question: "<p>What is 1x1?</p>",
      response1: "1",
      response2: "2",
      response3: "3",
      response4: "4",
      answerKey: 1
    },
    {
      question: "<p>What is 2x1?</p>",
      response1: "1",
      response2: "2",
      response3: "3",
      response4: "4",
      answerKey: 2
    },
    {
      question: "<p>What is 2+1?</p>",
      response1: "1",
      response2: "2",
      response3: "3",
      response4: "4",
      answerKey: 3
    },
    {
      question: "<p>What is 2+2?</p>",
      response1: "1",
      response2: "2",
      response3: "3",
      response4: "4",
      answerKey: 4
    },
  ]
  const [questionNo, setQuestionNo] = useState(0);

  const [skipped, setSkipped] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [answers, setAnswers] = useState([]); 

  return (
    <div className="absolute left-0 top-0 w-full min-h-screen">
      <div className="opacity-50 bg-gradient-to-tr from-blue-600 via-transparent w-full min-h-screen fixed left-0 top-0 -z-10"></div>
      <div className="opacity-100 bg-gradient-to-br from-blue-300 via-purple-400 to-red-400 w-full min-h-screen fixed left-0 top-0 -z-20"></div>
      {/* <div className="opacity-100 bg-gradient-to-tr from-red-300  w-full min-h-screen fixed left-0 top-0 -z-40"></div> */}
      
      <div className="bg-white w-p-50 mx-p-25 flex min-h-[80vh] my-[10vh] rounded-2xl p-4">
        {questionNo <= questions.length && questionNo !== 0 ? (<Question onSkip={() => setSkipped(skipped+1)} onCorrect={() => setCorrect(correct+1)} onIncorrect={() => setIncorrect(incorrect+1)} onAnswer={(answer) => setAnswers([...answers, answer])} questionHTML={questions[questionNo-1].question} questionNo={questionNo} questionsCount={questions.length} response1={questions[questionNo-1].response1} response2={questions[questionNo-1].response2} response3={questions[questionNo-1].response3} response4={questions[questionNo-1].response4} answerKey={questions[questionNo-1].answerKey} key={questionNo} onPass={() => setQuestionNo(questionNo+1)}/>) : (<React.Fragment></React.Fragment>)}
        {questionNo > questions.length ? <Report skipped={skipped} correct={correct} incorrect={incorrect} questions={questions} answers={answers}></Report> : (<React.Fragment></React.Fragment>)}
        {questionNo === 0 ? (<Home onStart={() => setQuestionNo(1)}></Home>) : (<React.Fragment></React.Fragment>)}
      </div>
    </div>
  );
}

export default App;
