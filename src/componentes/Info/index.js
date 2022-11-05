import React from 'react';
import './style.css'

function Info () {
    return(
        <section id='info' className='info'>
            <div className='info_box container'>
                <div className='info_box_text'>
                    <h3 className='info_box_title'>Tem vontade de apostar mas não sabe como a loteria funciona?</h3>
                    <p className='info_box_description'>Clicando no botão abaixo você pode aprender tudo sobre como a loteria funciona e ficar por dentro de todos os jogos e resultados das apostas.</p>
                    <a href='https://loterias.caixa.gov.br/Paginas/default.aspx' className='btnCaixa' target='_blank'>Clique aqui</a>
                </div>
                <img className='img_content' src={'assets/homem_pensativo.png'}></img>      
            </div>
        </section>
    );
};

export default Info;