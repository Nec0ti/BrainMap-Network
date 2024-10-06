// src/App.js

import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css'; // Stil dosyasını ekleyin
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Parallax
                blur={10}
                bgImage={require('./image.jpg')} // Buraya arka plan resminizin yolunu ekleyin
                bgImageAlt="the dog"
                strength={500}
            >
                <div style={{ height: '100vh' }}>
                    <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '40vh' }}>Welcome to BrainMap Network</h1>
                </div>
            </Parallax>
            {/* Diğer içerikler burada yer alacak */}
            <div style={{ height: '200vh', background: '#f0f0f0' }}>
                <h2 style={{ textAlign: 'center', paddingTop: '20vh' }}>Content goes here</h2>
            </div>
        </div>
    );
};

export default App;
