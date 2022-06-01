import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './Beranda';
import Kontak from './Kontak';
import Portfolio from './Portfolio';
import Tentang from './Tentang';

const Utama = () => (
    <Routes>
        <Route path="/" element={<Beranda/>}/>
        <Route path="/Beranda" element={<Beranda/>}/>
        <Route path="/Kontak" element={<Kontak/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Tentang" element={<Tentang/>}/>
    </Routes>
)
export default Utama;