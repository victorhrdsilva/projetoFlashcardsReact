import React from 'react';
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Flashcards from "./Flashcards/Flashcards"
import Footer from "./Footer/Footer"
// import HomeScreen from "./HomeScreen/HomeScreen"



export default function App () {
    const [questionsAnswered, setQuestionsAnswered] = React.useState(0)

    return (
        <>
        <Flashcards setQuestionsAnswered={setQuestionsAnswered} questionsAnswered={questionsAnswered} />
        <Footer questionsAnswered={questionsAnswered}/>
        </>
    )
}