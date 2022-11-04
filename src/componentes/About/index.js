import React from 'react';
import Card from '../Card'
import './style.css';

function About () {
    return (
        <section id='about' className='about_section'>
            <div className='container about_section_box'>
                <div className='about_section_content_text'>
                    <h2 className='content_text_title'>Deixe seu palpite por nosso conta!</h2>                
                    <p className='content_text_paragraph'>Na nossa plataforma você gera de forma automática os números para o seu próximo jogo.</p>
                </div>
                <div className='about_section_content_cards'>
                    <Card 
                        imagem='assets/ball.png'
                        titulo='Números da Sorte'
                        descricao='Não se preocupe mais em ficar escolhando os número nos quais aposta'
                    />
                    <Card 
                        imagem='assets/monitor_number.png'
                        titulo='Sorteio Automático'
                        descricao='Ao clicar em um siples botão, serão geradoos os número para o seu jogo.'
                    />
                    <Card 
                        imagem='assets/lotto.png'
                        titulo='Aposte!'
                        descricao='Agora sua sorte está lançada! É só anotar seus números e apostar!'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

