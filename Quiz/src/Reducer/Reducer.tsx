import AppState from "../Main/Statetype";

let initialState : AppState = {
    currentQuestionIndex: 0,
    totalAnsweredQuestions: 0,
    questions: [
        "What is the capital of India?",
        "Who is the current prime minister of India?",
        "What is the national animal of India?",
        "How many days are in a leap year?",
        "Who is the current president of United States of America?",
    ],
    options:[
        ["Lucknow","Jaipur","Delhi","Mumbai"],
        ["Manmohan Singh", "Narendra Modi", "Amit Shah", "Rahul Gandhi"],
        ["Bengal Tiger", "Dog", "Monkey", "Peacock"],
        ["365","366","364","367"],
        ["Osama Bin Laden", "Donald Trump","Barack Obama", "Joe Biden"]
    ],
    answerIndices:[2,1,0,1,3],
    userAnswersIndices: [],
    currentOptionIndexSelected: -1
}

const Reducer =  (state: AppState = initialState, action: { type: any; payload: any; }) => {
     state = {...state, ...action.payload};
     return state;
};

export default Reducer;