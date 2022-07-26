export default function FlashcardsOpened({question, answer, opened, setOpened}) {

    return (
    <div className={"question-opened " + opened}>
        <div className={'question ' + opened}>
            <p>{question}</p>
            <ion-icon onClick={() => { setOpened("backface") }} name="reload-circle"></ion-icon>
        </div>
        <div className={'answer ' + opened}>
            <p>{answer}</p>
            <div className='icons'>
                <div className="button red">
                    <p>Não lembrei</p>
                </div>
                <div className="button yellow">
                    <p>Tive dificuldade</p>
                </div>
                <div className="button green">
                    <p>Lembrei</p>
                </div>
            </div>
        </div>
    </div>
    )
}