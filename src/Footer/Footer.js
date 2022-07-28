import React from 'react';
import "./style.css";

function result(item) {
    let resultIcon = "🤯 Parabéns!"
    let resultText = "Você foi ótimo!"
    for (let i = 0; i < 4; i++) {
        if (item[i] === "close-circle") {
            resultIcon = "😥 Iche!"
            resultText = "Você pode melhor!"
        }
    }
    return (
        <div className='result'>
        <div>
            <h2>{resultIcon}</h2>
        </div>
        <div>
            <p>{resultText}</p>
        </div>
        </div>
    )
}

export default function Footer({ questionsAnswered, questionsAnsweredIcon }) {

    return (
        <div className="footer">
            <p>{questionsAnswered}/4 CONCLUÍDOS</p>
            <div className='iconsAnwers'>
                {questionsAnsweredIcon.map((element, index) => <ion-icon key={index} name={element}></ion-icon>)}
            </div>
            {questionsAnswered == 4 ?  result(questionsAnsweredIcon): ""}
        </div>
    )
}