import React from 'react';
import { useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import BotaoVoltar from '../BotaoVoltar';

function Megasena () {

    const [Num , NumUp] = useState('');

    function RandomNumMega () {
        let number = 0;
        let numbers = [];
        let numbersElements = [];
        let i = 0;

        do {
            number = Math.floor(Math.random() * (60 - 1) + 1);
            if (!numbers.includes(number)) {
                numbers.push(number);
                i++;   
            }  
        } while (i < 6);

        numbers.sort(function(a, b){return a-b});

        numbers.forEach((n)=>{
            numbersElements.push(<div className='luckyNumber'>{n}</div>)
        })

        NumUp(numbersElements);
    };

    function clearArea(){
        NumUp('');
    }
    
    return (
        <div className='mega_sena_page'>
            <Header />
            <div className='mega_sena_main container'>
                <div>
                    <div>
                        <img className='icon_logo' src={'assets/icon_mega.png'}></img>
                        <img className='mega_logo' src={'assets/megaCA.png'}></img>
                    </div>
                    <h2 className='mega_sena_title'>Nunca foi tão fácil apostar! Clique me "sortear", anote seus números e boa sorte!</h2>
                    <div className='luckyNumbers'>
                        { Num }
                    </div>
                    <button className='btnClear' onClick={ clearArea }>novo sorteio</button>
                    <button className='btnGenerator' onClick={ RandomNumMega }>sorter</button>
                    <BotaoVoltar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Megasena;