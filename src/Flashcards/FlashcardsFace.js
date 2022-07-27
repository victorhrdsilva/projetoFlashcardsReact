export default function FlashCardsFace({ index, setOpened, opened, colorAnwered, iconAnswered}) {
    return (
        <div className={"flashcard " + opened}>
            <h2 className={colorAnwered}>Pergunta {index + 1}</h2>
            {iconAnswered == "chevron-forward-circle" ? 
            <ion-icon onClick={() => { setOpened(true) }} name="chevron-forward-circle"></ion-icon> : 
            <ion-icon name={iconAnswered}></ion-icon>}
        </div>
    )
}