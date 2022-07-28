import React from 'react';
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Flashcards from "./Flashcards/Flashcards"
import Footer from "./Footer/Footer"
import HomeScreen from "./HomeScreen/HomeScreen"



export default function App() {
    const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
    const [questionsAnsweredIcon, setQuestionsAnsweredIcon] = React.useState([]);
    const [start, setStart] = React.useState(true);

    return (
        <>
            {start ?
                <HomeScreen setStart={setStart} /> :
                <div>
                    <Flashcards setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered} questionsAnsweredIcon={questionsAnsweredIcon} 
                    setQuestionsAnsweredIcon={setQuestionsAnsweredIcon}/>
                    <Footer questionsAnswered={questionsAnswered} questionsAnsweredIcon={questionsAnsweredIcon}/>
                </div>
            }

        </>
    )
}