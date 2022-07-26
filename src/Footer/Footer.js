import React from 'react';
import "./style.css";

export default function Footer({questionsAnswered}) {
    console.log()
    return (
        <div className="footer">
            <p>{questionsAnswered}/8 CONCLUÍDOS</p>
        </div>
    )
}