import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

function Header () {
    return(
        <header>
            <div className='container header_content'>
                <div> <Link to='/'><img className='header_content_logo' src={'assets/logo_branco.png'}></img></Link></div>
                <nav className='header_content_nav'>
                    <Link className='link' to='/#about'>Como Funciona</Link>
                    <Link className='link' to='/#myguess'>Palpites</Link>
                    <Link className='link' to='/megasena'>Mega-Sena</Link>
                    <Link className='link' to='/lotofacil'>Lotofácil</Link>
                    <Link className='link' to='/#info'>Apostas</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;