import React from 'react';
import { useState } from 'react';
import Header from '../Header'
import './style.css'
import BotaoVoltar from '../BotaoVoltar';

function Megasena () {

    const [Num , NumUp] = useState(1);

    function RandomNum () {
        let numbers = [];
        let number = 0;
        let i = 0;

        do {
            number = Math.floor(Math.random() * (60 - 1) + 1);
            if (!numbers.includes(number)) {
                numbers.push(number);
                i++;   
            }  
        } while (i < 6);

        NumUp(numbers);
    };
    
    return (
        <div className='color'>
            <Header />
            <h1>Essa é a página da Mega-Sena</h1>
            <div>
                <span>{ Num[0] }</span>
                <span>{ Num[1] }</span>
                <span>{ Num[2] }</span>
                <span>{ Num[3] }</span>
                <span>{ Num[4] }</span>
                <span>{ Num[5] }</span>
            </div>

            <button onClick={ RandomNum }></button>
            <BotaoVoltar />
        </div>
    );
};

export default Megasena;