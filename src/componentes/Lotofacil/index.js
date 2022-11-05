import React from 'react';
import { useState } from 'react';
import Header from '../Header'
import Footer from '../Footer';
import './style.css';
import BotaoVoltar from '../BotaoVoltar';

function Lotofacil () {
  
    const [Num , NumUp] = useState('');

    function RandomNumLoto () {
        let number = 0;
        let numbers = [];
        let numbersElements = [];
        let i = 0;

        do {
            number = Math.floor(Math.random() * (25 - 1) + 1);
            if (!numbers.includes(number)) {
                numbers.push(number);
                i++;   
            }  
        } while (i < 15);
        
        numbers.sort(function(a, b){return a-b});

        numbers.forEach((n)=>{
            numbersElements.push(<div className='luckyNumberLoto'>{n}</div>)
        })

        NumUp(numbersElements);
    };

    function clearArea(){
        NumUp('');
    }
    
    return (
        <div className='lotofacil_page'>
            <Header />
            <div className='lotofacil_main container'>
                <div>
                    <div>
                        <img className='icon_logo' src={'assets/icon_lotofacil.png'}></img>
                        <img className='mega_logo' src={'assets/lotoCA.png'}></img>
                    </div>
                    <h2 className='lotofacil_title'>Nunca foi tão fácil apostar! Clique me "sortear", anote seus números e boa sorte!</h2>
                    <div className='luckyNumbers'>
                        { Num }
                    </div>
                    <button className='btnClear' onClick={ clearArea }>limpar</button>
                    <button className='btnGenerator' onClick={ RandomNumLoto }>sorter</button>
                    <BotaoVoltar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Lotofacil;

