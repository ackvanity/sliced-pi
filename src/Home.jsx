import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Home({ onStart }) {
    return (
        <div className="w-full min-h-full flex justify-center content-center flex-col m-auto">
            <header>
                <h1 className="text-6xl w-full text-center">Sliced Pi</h1>
            </header>
            <main className="flex justify-center align-middle m-14 group/btn">
                <button className="opacity-80 hover:opacity-100 transition-all text-lg text-center bg-purple-50 border-purple-200 border-2 rounded-full p-2 px-5 hover:bg-purple-100 hover:border-purple-300" onClick={() => onStart()}>Start! <FontAwesomeIcon icon={faArrowRightLong} className='group-hover/btn:ml-1 group-hover/btn:mr-0 group-hover/btn:opacity-100 ml-0 mr-1 transition-all'/></button>
            </main>
        </div>
    )
}

export default Home;