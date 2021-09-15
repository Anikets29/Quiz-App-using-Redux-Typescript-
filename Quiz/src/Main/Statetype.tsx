

interface AppState {
    currentQuestionIndex: number,
    totalAnsweredQuestions: number,
    questions: Array<string>,
    options: Array<Array<string>>,
    answerIndices: Array<number>,
    userAnswersIndices: Array<number>,
    currentOptionIndexSelected: number
}

export default AppState;