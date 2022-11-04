import React from 'react';
import './style.css'

function Card (props) {
    return(
        <div className='card'>
            <div><img className='img_card' src={props.imagem}></img></div>
            <h3 className='title_card'>{props.titulo}</h3>
            <p className='description_card'>{props.descricao}</p>
        </div>
    );
};

export default Card;