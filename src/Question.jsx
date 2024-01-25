import { faArrowRightLong, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as React, useState } from 'react';

// SEVERE WARNING: NEVER pass User Content into this component - it is XSS-vulnerable for untrusted sources.

function Question({questionHTML, response1, response2, response3, response4, answerKey, questionNo, questionsCount, onPass, onSkip, onCorrect, onIncorrect, review, response, onAnswer}) {
    const [ answer, setAnswer] = useState(!review ? -1 : response);
    const [ isConfirmingSkip, setIsConfirmingSkip] = useState(review);
    const answered = answer !== -1;
    
    console.log(isConfirmingSkip);

    return (
        <div className="w-full min-h-full md:p-10">
            <header>
                <p className="opacity-70 text-purple-900 uppercase font-bold">Question {questionNo} out of {questionsCount}</p>
            </header>
            <main className='mt-10 flex flex-col'>
                <p dangerouslySetInnerHTML={{__html: questionHTML}} className="w-full text-center"></p>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='max-w-80 w-full flex flex-col'>
                        <p className="opacity-70 text-blue-800 uppercase font-bold w-full text-center mb-2">Choices:</p>
                        <AnswerButton response={response1} isCorrect={1==answerKey && answered} isIncorrect={1==answer && answered} onClick={() => {setAnswer(1);onAnswer(1);if(1==answerKey)onCorrect();else onIncorrect();}} isAnswered={answered}/>
                        <AnswerButton response={response2} isCorrect={2==answerKey && answered} isIncorrect={2==answer && answered} onClick={() => {setAnswer(2);onAnswer(2);if(2==answerKey)onCorrect();else onIncorrect();}} isAnswered={answered}/>
                        <AnswerButton response={response3} isCorrect={3==answerKey && answered} isIncorrect={3==answer && answered} onClick={() => {setAnswer(3);onAnswer(3);if(3==answerKey)onCorrect();else onIncorrect();}} isAnswered={answered}/>
                        <AnswerButton response={response4} isCorrect={4==answerKey && answered} isIncorrect={4==answer && answered} onClick={() => {setAnswer(4);onAnswer(4);if(4==answerKey)onCorrect();else onIncorrect();}} isAnswered={answered}/>
                        { answered ? (<button className="self-end group/btn block text-center text-blue-600 border border-blue-300 rounded-[3px] hover:bg-blue-200 transition-all py-1 px-4 mt-3" onClick={() => {onPass();}}>Next <FontAwesomeIcon icon={faArrowRightLong} className="inline-block ml-0 mr-1 group-hover/btn:mr-0 group-hover/btn:ml-1 transition-all"></FontAwesomeIcon></button>) :
                            (<button className="self-end group/btn block text-center text-red-600 border border-red-300 rounded-[3px] hover:bg-red-200 transition-all py-1 px-4 mt-3" onClick={() => setIsConfirmingSkip(true)}>Skip</button>)
                        }

                        <div className="data-[active=true]:bg-opacity-50 data-[active=true]:opacity-100 data-[active=true]:bg-black fixed left-0 top-0 w-screen h-screen opacity-0 transition-all flex flex-col items-center -z-10 data-[active=true]:z-10 duration-300" data-active={isConfirmingSkip}>
                            <div className='bg-white w-p-25 min-w-96 mx-p-25 min-h-40 rounded-lg p-4 mt-[15vh]'>
                                <h2 className="text-xl uppercase text-slate-600">Skip Question?</h2>
                                <hr className="mt-4 mb-1"></hr>
                                <p className="text-slate-600">You will <b>not</b> be able to answer it later!</p>
                                <div className="flex justify-end items-end">
                                <button className="self-end group/btn block text-center text-blue-600 border border-blue-300 rounded-[3px] hover:bg-blue-200 transition-all py-1 px-4 mt-3 mr-3" onClick={() => {setIsConfirmingSkip(false)}}>Go back</button>
                                <button className="self-end group/btn block text-center text-red-600 border border-red-300 rounded-[3px] hover:bg-red-200 transition-all py-1 px-4 mt-3" onClick={() => {onSkip();onPass();onAnswer(-1);}}>Skip this question</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

function AnswerButton({response, isCorrect, isIncorrect, isAnswered, onClick}) {
    const correct=isCorrect;
    const incorrect=!correct && isIncorrect;
    return (
        <React.Fragment>
            {(!correct && !incorrect) ? (<button className="group/btn block max-w-80 w-full text-center text-slate-600 border border-scooter-300 my-1 rounded-[3px] hover:bg-scooter-200 transition-all" disabled={isAnswered} onClick={() => !isAnswered ? onClick() : false}><span dangerouslySetInnerHTML={{__html: response}}></span></button>) : (<React.Fragment></React.Fragment>)}
            {(incorrect) ? (<button className="group/btn block max-w-80 w-full text-center text-slate-600 border border-red-300 my-1 rounded-[3px] hover:bg-red-200 transition-all" disabled={isAnswered}><span dangerouslySetInnerHTML={{__html: response}}></span><FontAwesomeIcon icon={faXmark} className='opacity-80 float-right mt-1 mr-2 text-red-300 group-hover/btn:text-slate-600 transition-all'></FontAwesomeIcon></button>) : (<React.Fragment></React.Fragment>)}
            {(correct) ? (<button className="group/btn block max-w-80 w-full text-center text-slate-600 border border-green-300 my-1 rounded-[3px] hover:bg-green-200 transition-all" disabled={isAnswered}><span dangerouslySetInnerHTML={{__html: response}}></span><FontAwesomeIcon icon={faCheck} className='opacity-80 float-right mt-1 mr-2 text-green-300 group-hover/btn:text-slate-600 transition-all'></FontAwesomeIcon></button>) : (<React.Fragment></React.Fragment>)}
        </React.Fragment>
    )
}

export default Question;
export {AnswerButton};