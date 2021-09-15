
import {Action, Dispatch} from "redux";
import AppState from "../Main/Statetype";



const MoveToNextQuestion = (state: AppState, dispatch: Dispatch<Action>) =>{
    
    if(state.currentOptionIndexSelected === -1) {
        return;
    }

    let updatedState : { currentQuestionIndex: number; userAnswersIndices: number[]; currentOptionIndexSelected: number } = {
        currentQuestionIndex: state.currentQuestionIndex+1,
        currentOptionIndexSelected: -1,
        userAnswersIndices: state.userAnswersIndices.concat([state.currentOptionIndexSelected])
    }

    dispatch({type: "MOVE_TO_NEXT_QUESTION", payload: updatedState})
}

 export default MoveToNextQuestion;