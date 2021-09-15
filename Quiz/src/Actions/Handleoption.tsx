import {ChangeEvent} from "react";

import {Action, Dispatch} from "redux";
import AppState from "../Main/Statetype";



const HandleSelectOptionChange = (event: ChangeEvent<HTMLSelectElement>, state: AppState, dispatch:  Dispatch<Action>) => {
    event.stopPropagation();

    let updatedState : {currentOptionIndexSelected: number; totalAnsweredQuestions: number };

    let optionIndex = parseInt(event.target.value);
    let currentOptions = state.options[state.currentQuestionIndex];

    if(optionIndex<0 || optionIndex>=currentOptions.length){
        updatedState = {currentOptionIndexSelected: -1, totalAnsweredQuestions: Math.max(state.currentQuestionIndex,0)}
        dispatch({type: "HANDLE_SELECT_OPTION_CHANGE", payload: updatedState})
        return;
    }

    updatedState = {
        currentOptionIndexSelected: optionIndex,
        totalAnsweredQuestions: state.currentQuestionIndex+1
    }

    dispatch({type: "HANDLE_SELECT_OPTION_CHANGE", payload: updatedState})
}
 export default HandleSelectOptionChange;