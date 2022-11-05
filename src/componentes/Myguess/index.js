import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

function myGuess () {
    return (
        <section id='myguess' className='myguess'>
            <div className='myguess_content'>
                <h3 className='myguess_content_title'>Selecione seu jogo favorito e gere seu palpite.</h3>
                <p className='myguess_content_text'>Estou com sorte! Quero gerar um palpite para:</p>
            </div>
            <div className='myguess_card_area'>
                <Link to='/lotofacil'>
                    <div className='position_box_set'>
                        <div className='myguess_card card_lotofacil'>
                            <img className='myguess_logo' src='assets/icon_lotofacil.png'></img>
                            <img className='myguess_logotipo' src='assets/lotoCA.png'></img>
                        </div>
                        <div className='card_bet card_bet_lotofacil'>
                            <p>Apostar!</p>
                        </div>
                    </div>
                </Link>
                <Link to='/megasena'>
                    <div className='position_box_set'>
                        <div className='myguess_card card_megasena'>
                            <img className='myguess_logo' src='assets/icon_mega.png'></img>
                            <img className='myguess_logotipo' src='assets/megaCA.png'></img>
                        </div>
                        <div className='card_bet card_bet_megasena'>
                            <p>Apostar!</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default myGuess;