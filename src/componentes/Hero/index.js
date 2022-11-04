import React from 'react';
import './style.css'

function Hero () {
    return (
        <section className='hero_section'>
            <div className='container hero_section_box'>
                <div className='hero_section_content'>
                    <h1 className='hero_section_content_title'>Sua sorte nunca foi tão grande!</h1>
                    <p className='hero_section_content_text'>Você sempre tem dúvidas de quais números escolher na hora de realizar seu jogo? Agora você não precisa mais se preocupar!</p>
                    <div>
                        <button className='hero_section_content_button'>Saiba Mais</button>     
                    </div>           
                </div>
            </div>
        </section>
    )
};

export default Hero;