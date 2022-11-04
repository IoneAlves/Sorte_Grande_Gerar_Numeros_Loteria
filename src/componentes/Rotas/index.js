import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Home';
import Megasena from '../Megasena';
import Lotofacil from '../Lotofacil';

function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/megasena' element={<Megasena/>}/>
                <Route path='/lotofacil' element={<Lotofacil/>}/>
            </Routes>       
        </BrowserRouter>
    );
};

export default Rotas;