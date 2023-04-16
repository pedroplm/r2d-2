import React from 'react';
//import { useState } from 'react';
import {Brand, CTA, Navbar} from "./components";
import {Footer, Blog, Possibility, Features, WhatR2D2, Header} from "./containers";
import "./App.css";
//import 'bootstrap';

const App = ()=>{
    
    return (
        <div className = 'App'>
            <div className = 'gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatR2D2 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
        

    )
}

export default App


