export default function FlashCardsFace({ index, setOpened, opened }) {
    return (
        <div className={"flashcard " + opened}>
            <h2>Pergunta {index + 1}</h2>
            <ion-icon onClick={() => { setOpened(true) }} name="chevron-forward-circle"></ion-icon>
        </div>
    )
}