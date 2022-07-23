import icon from "../assets/image/flash-icon.png"
import "./style.css";

export default function HomeScreen() {
    return (
        <div className="home-screen">
            <img src={icon} />
            <h1>FlashCards</h1>
            <button>Iniciar Flashcards</button>
        </div>
    )
}