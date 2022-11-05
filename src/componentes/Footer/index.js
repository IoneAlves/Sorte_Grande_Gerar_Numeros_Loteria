import React from 'react';
import './style.css'

function Footer () {
    return (
        <footer className='footer'>
            <section className='footer_content container'>
                <img className='footer_content_img' src={'assets/logo_branco.png'}></img>
                <p className='footer_content_about'>Sorte Grande - Gerador de Números para Loterias &#169; 2022</p>
                <p className='footer_content_warning'>Esse projeto foi idealizado apenas para fins educacionais. Não me responsabilizo por sua utilização para fins de apostas reais.</p>
            </section>
        </footer>
    );
};

export default Footer;