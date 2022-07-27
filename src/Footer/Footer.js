import React from 'react';
import "./style.css";

export default function Footer({ questionsAnswered, questionsAnsweredIcon }) {

    return (
        <div className="footer">
            <p>{questionsAnswered}/8 CONCLUÍDOS</p>
            <div className='iconsAnwers'>
                {questionsAnsweredIcon.map((element, index) => <ion-icon key={index} name={element}></ion-icon>)}
            </div>
        </div>
    )
}