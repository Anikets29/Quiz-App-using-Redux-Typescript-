import React from "react";
import { useSelector, useDispatch } from "react-redux"
import ArrowRight from "../Components/ArrowRight";
import Loader from "../Components/Loader";
import HandleSelectOptionChange from "../Actions/Handleoption";
import AppState from "./Statetype";
import MoveToNextQuestion from "../Actions/Nextquestion";



const GetState = () =>{
    return useSelector((state: AppState) => state);
}




const GetCorrectAnswersCount = (state: AppState) => {
    let correctAnswers = 0;
    for (let i = 0; i < state.questions.length; i++) {
        if(state.answerIndices[i] === state.userAnswersIndices[i]){
            correctAnswers++;
        }
    }
    return correctAnswers;
}

const RenderQuestion = () => {
    const state = GetState();
    const dispatch = useDispatch();
    return  (<React.Fragment>
        <div className="my-10">
            <h1 className="font-medium text-5xl">Q{state.currentQuestionIndex+1}. {state.questions[state.currentQuestionIndex]}</h1>
        </div>

        <div>
            <select onChange={(e)=>HandleSelectOptionChange(e, state, dispatch)} value={state.currentOptionIndexSelected} className="p-4 px-8 text-xl focus:outline-none focus:ring-2 focus:ring-pink-300">
                <option value="-1" selected>Choose an option</option>
                {state.options[state.currentQuestionIndex]?.map((item,index) => (<option value={index}>{item}</option>))}
            </select>
        </div>

        <div className="flex justify-end">
            <button title="Next Question" onClick={()=>MoveToNextQuestion(state, dispatch)} className={`p-4 px-8 text-pink-600 bg-pink-200 uppercase rounded ${state.currentOptionIndexSelected === -1 ?("opacity-25 cursor-not-allowed shadow-inner"):("")}`}>
                {state.currentQuestionIndex === state.questions.length-1? "Finish ":"Next "}
                <ArrowRight/></button>
        </div>
    </React.Fragment>);
}

const RenderScore = () => {
    const state = GetState();
    return ( <React.Fragment>
        <div className="my-10 flex justify-center">
            <h1 className="font-medium text-6xl">{GetCorrectAnswersCount(state)*100/state.questions?.length}%</h1>
        </div>
        <div className="flex justify-center">
            <p>You got {GetCorrectAnswersCount(state)} answers of {state.questions?.length} right!</p>
        </div>
    </React.Fragment>)
}


const Quiz = () =>{
    const state = GetState();
    return (
        <div className="bg-white mx-auto max-w-4xl mt-36 p-10 rounded-lg shadow-md">
            <Loader totalAnsweredQuestions={state.totalAnsweredQuestions} totalQuestion={state.questions?.length}/>
            {state.questions?.length === state.userAnswersIndices?.length ? (RenderScore()):(RenderQuestion())}
        </div>
    );
}



export default Quiz;