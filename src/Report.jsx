import { default as React } from 'react';
import { AnswerButton } from './Question';

function Review({question, answer, questionNo}){
    console.log(question);
    console.log(answer);
    console.log(questionNo);
    return (
        <React.Fragment>
            <div className='max-w-80 w-full'>
                {/* <h3 className="inline-block opacity-90 text-center text-purple-900 uppercase font-bold mr-2">Question {questionNo}:</h3> */}
                <span className="inline-block" dangerouslySetInnerHTML={{__html: `<p><span class="inline-block opacity-90 text-center text-purple-900 uppercase font-bold mr-2">Question ${questionNo}:</span>${question.question.substr(3)}`}}></span>
            </div>
            <div className='max-w-80 w-full flex flex-col'>
                <p className="opacity-90 text-purple-900 uppercase font-bold">Choices: {(answer===-1) ? (<span className="opacity-90 text-rose-800 uppercase font-bold">[Skipped]</span>) : (answer===question.answerKey) ? (<span className="opacity-90 text-green-600 uppercase font-bold">[Correct]</span>) : (<span className="opacity-90 text-rose-800 uppercase font-bold">[Incorrect]</span>)}</p>
                <span className={`${(answer===-1 && !(question.answerKey==1)) ? "opacity-50" : ""}`}><AnswerButton response={question.response1} isIncorrect={answer===1 || answer===-1} isCorrect={question.answerKey==1} isAnswered={true}></AnswerButton></span>
                <span className={`${(answer===-1 && !(question.answerKey==2)) ? "opacity-50" : ""}`}><AnswerButton response={question.response2} isIncorrect={answer===2 || answer===-1} isCorrect={question.answerKey==2} isAnswered={true}></AnswerButton></span>
                <span className={`${(answer===-1 && !(question.answerKey==3)) ? "opacity-50" : ""}`}><AnswerButton response={question.response3} isIncorrect={answer===3 || answer===-1} isCorrect={question.answerKey==3} isAnswered={true}></AnswerButton></span>
                <span className={`${(answer===-1 && !(question.answerKey==3)) ? "opacity-50" : ""}`}><AnswerButton response={question.response4} isIncorrect={answer===4 || answer===-1} isCorrect={question.answerKey==4} isAnswered={true}></AnswerButton></span>
            </div>
        </React.Fragment>
    )
}

function Report({skipped,correct,incorrect,questions,answers}) {
    return (
        <div className="w-full min-h-full md:p-10">
            <header>
                <p className="opacity-70 text-purple-900 uppercase font-bold">Report</p>
            </header>
            <main className='mt-10 flex flex-col text-slate-600'>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='max-w-80 w-full flex flex-col items-center justify-center'>
                        <div className="md:w-full w-48 flex group/metric border border-slate-400 my-2 p-2 rounded-md hover:shadow-[inset_20rem_0_0_0] hover:shadow-slate-100 transition-all md:duration-300 duration-500">
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block w-32 text-slate-600">Skipped</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block w-3">:</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block flex-grow">{skipped}</span>
                        </div>
                        <div className="md:w-full w-48 flex group/metric border border-green-200 my-2 p-2 rounded-md hover:shadow-[inset_20rem_0_0_0] hover:shadow-green-100 transition-all md:duration-300 duration-500">
                            <span className="group-hover/metric:text-green-600 transition-all inline-block w-32 text-green-400">Correct</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block w-3">:</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block flex-grow">{correct}</span>
                        </div>
                        <div className="md:w-full w-48 flex group/metric border border-red-200 my-2 p-2 rounded-md hover:shadow-[inset_20rem_0_0_0] hover:shadow-red-100 transition-all md:duration-300 duration-500">
                            <span className="group-hover/metric:text-red-600 transition-all inline-block w-32 text-red-400">Incorrect</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block w-3">:</span>
                            <span className="group-hover/metric:text-slate-800 transition-all inline-block flex-grow">{incorrect}</span>
                        </div>

                        <h2 className="w-full opacity-90 text-center text-purple-900 uppercase font-bold text-xl mt-10 mb-5">Review</h2>
                        {
                            questions.map((question, index) => {
                                return (<Review question={question} answer={answers[index]} key={index} questionNo={index+1}></Review>)
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Report;