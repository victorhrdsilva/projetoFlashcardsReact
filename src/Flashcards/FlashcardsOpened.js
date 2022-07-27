import React from 'react';
export default function FlashcardsOpened({question, answer, opened, setOpened, questionsAnswered, setQuestionsAnswered, 
    questionsAnsweredIcon, setQuestionsAnsweredIcon, setColorAnswered, setIconAnswered}) {
    function Answered (status, color) {
        setColorAnswered("answered font" + color)
        setQuestionsAnswered(questionsAnswered + 1)
        setQuestionsAnsweredIcon([...questionsAnsweredIcon, status])
        setOpened(false)
        setIconAnswered(status)
    }

    return (
    <div className={"question-opened " + opened}>
        <div className={'question ' + opened}>
            <p>{question}</p>
            <ion-icon onClick={() => { setOpened("backface turn") }} name="reload-circle"></ion-icon>
        </div>
        <div className={'answer ' + opened}>
            <p>{answer}</p>
            <div className='icons'>
                <div onClick={() => Answered("close-circle", "red")} className="button red">
                    <p>Não lembrei</p>
                </div>
                <div onClick={() => Answered("alert-circle", "yellow")} className="button yellow">
                    <p>Tive dificuldade</p>
                </div>
                <div onClick={() => Answered("chevron-down-circle", "green")} className="button green">
                    <p>Lembrei</p>
                </div>
            </div>
        </div>
    </div>
    )
}



