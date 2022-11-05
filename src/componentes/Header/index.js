import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

function Header () {
    return(
        <header>
            <div className='container header_content'>
                <div> <Link to='/'><img className='header_content_logo' src={'assets/logo_branco.png'}></img></Link></div>
                <nav className='header_content_nav'>
                    <a className='link' href='/#about'>Como Funciona</a>
                    <a className='link' href='/#myguess'>Palpites</a>
                    <Link className='link' to='/megasena'>Mega-Sena</Link>
                    <Link className='link' to='/lotofacil'>Lotofácil</Link>
                    <a className='link' href='/#info'>Palpites</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;