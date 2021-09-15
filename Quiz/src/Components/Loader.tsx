
interface LoaderProps {
    totalAnsweredQuestions: number,
    totalQuestion: number,
}

let getWidth = (totalAnsweredQuestions: number, totalQuestion: number) => {
    return (totalAnsweredQuestions*100)/totalQuestion;
}

function Loader(props: LoaderProps ) {

    let totalAnsweredQuestions =  props.totalAnsweredQuestions ?? 0;
    let totalQuestion = props.totalQuestion ?? 1;

    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
        Quiz Progress
      </span>
                </div>
                <div className="text-right">
      <span className="text-xs font-semibold inline-block text-pink-600">
        {getWidth(totalAnsweredQuestions, totalQuestion)}%
      </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">

                <div style={{width: getWidth(totalAnsweredQuestions, totalQuestion)+'%'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"/>
            </div>
        </div>
    );
}



export default Loader;