import icon from "../assets/image/flash-icon.png"
import "./style.css";

export default function Flashcards() {
    return (
        <div className="flashcards-page">
            <div className="logo">
                <img src={icon} />
                <h1>FlashCards</h1>
            </div>
            <div className="flashcard">
                <h2>Pergunta 1</h2>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            <div className="flashcard">
                <h2>Pergunta 1</h2>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            <div className="flashcard">
                <h2>Pergunta 1</h2>
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}