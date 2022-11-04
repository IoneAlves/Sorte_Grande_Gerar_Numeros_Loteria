import React from 'react';
import './style.css'

function Info () {
    return(
        <section id='info' className='info'>
            <div className='info_box container'>
                <div className='info_box_text'>
                    <h3 className='info_box_title'>Tem vontade de apostar mas não sabe como a loteria funciona?</h3>
                    <p className='info_box_description'>Você pode aprender tudo sobre a loteria clicando aqui e acessando o site da Caixa.</p>
                    <a href='https://loterias.caixa.gov.br/Paginas/default.aspx' className='btnCaixa'_blank>Clique aqui</a>
                </div>
                <img className='img_content' src={'assets/homem_pensativo.png'}></img>           
            </div>
        </section>
    );
};

export default Info;