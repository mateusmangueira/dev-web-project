import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}