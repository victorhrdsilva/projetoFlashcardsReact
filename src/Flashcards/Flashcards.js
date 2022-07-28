import React from 'react';
import icon from "../assets/image/flash-icon.png"
import FlashcardsFace from './FlashcardsFace';
import FlashcardsOpened from './FlashcardsOpened';
import "./style.css";

let deck = [
    {
        question: "O que o React é?",
        answer: "uma biblioteca JavaScript para construção de interfaces",
        opened: false

    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
        opened: false

    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
        opened: false

    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React nele",
        opened: false

    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências",
        opened: false

    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes",
        opened: false

    },
    {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        opened: false

    },
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript",
        opened: false

    },
]

deck.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

function Flashcard({ question, answer, index, setQuestionsAnswered, questionsAnswered, questionsAnsweredIcon, setQuestionsAnsweredIcon}) {
    const [opened, setOpened] = React.useState(false)
    const [colorAnwered, setColorAnswered] = React.useState("")
    const [iconAnswered, setIconAnswered] = React.useState("chevron-forward-circle")


    return (
        <div className='card'>
            <FlashcardsFace index={index} setOpened={setOpened} opened={opened} colorAnwered={colorAnwered} iconAnswered={iconAnswered}/>
            <FlashcardsOpened question={question} setOpened={setOpened} answer={answer} opened={opened} 
            questionsAnswered={questionsAnswered} setQuestionsAnswered={setQuestionsAnswered}  setQuestionsAnsweredIcon={setQuestionsAnsweredIcon} 
            questionsAnsweredIcon={questionsAnsweredIcon} setColorAnswered={setColorAnswered} setIconAnswered={setIconAnswered}/>
        </div>
    )
}

export default function Flashcards({setQuestionsAnswered, questionsAnswered, questionsAnsweredIcon, setQuestionsAnsweredIcon}) {

    return (
        <div className="flashcards-page">
            <div className="logo">
                <img src={icon} alt="logo de um raio"/>
                <h1>FlashCards</h1>
            </div>
            {deck.map((item, index) => {
                if(index<4) {
                    return (
                <Flashcard
                    question={item.question}
                    answer={item.answer}
                    setQuestionsAnswered={setQuestionsAnswered}
                    questionsAnswered={questionsAnswered}
                    questionsAnsweredIcon={questionsAnsweredIcon}
                    setQuestionsAnsweredIcon={setQuestionsAnsweredIcon}
                    index={index}
                    key={index} />
                )}})}
        </div>
    )
}