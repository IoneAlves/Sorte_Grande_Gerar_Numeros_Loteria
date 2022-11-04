import React from 'react';
import { useState } from 'react';
import Header from '../Header'
import './style.css';
import BotaoVoltar from '../BotaoVoltar';

function Lotofacil () {

    const [Num , NumUp] = useState(1);

    function RandomNum () {
        let numbers = [];
        let number = 0;
        let i = 0;

        do {
            number = Math.floor(Math.random() * (25 - 1) + 1);
            if (!numbers.includes(number)) {
                numbers.push(number);
                i++;   
            }  
        } while (i < 20);

        NumUp(numbers);
    };
    
    return (
        <div className='color'>
            <Header />
            <h1>Esssa á a página da Lotofácil</h1>
            <div>
                <span>{ Num[0] }</span>
                <span>{ Num[1] }</span>
                <span>{ Num[2] }</span>
                <span>{ Num[3] }</span>
                <span>{ Num[4] }</span>
                <span>{ Num[5] }</span>
                <span>{ Num[6] }</span>
                <span>{ Num[7] }</span>
                <span>{ Num[8] }</span>
                <span>{ Num[9] }</span>
                <span>{ Num[10] }</span>
                <span>{ Num[11] }</span>
                <span>{ Num[12] }</span>
                <span>{ Num[13] }</span>
                <span>{ Num[14] }</span>
                <span>{ Num[15] }</span>
                <span>{ Num[16] }</span>
                <span>{ Num[17] }</span>
                <span>{ Num[18] }</span>
                <span>{ Num[19] }</span>
            </div>
            <button onClick={ RandomNum }></button>
            <BotaoVoltar />
        </div>
    );
};

export default Lotofacil;