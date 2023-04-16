import React from 'react';
import { Feature } from '../../components';
import './whatr2d2.css';

const WhatR2D2 = ()=>{
    return(
        <div className = "r2d2__whatr2d2 section__margin" id = "wr2d2">
            <div className = "r2d2__whatr2d2-feature ">
                <Feature
                    title = "What is R2D-2" 
                    text = "R2D2 is a new AI Technology that is designed to help human decision-making process and learn from experience. The acronym stand for 'Reinforcement to Recursive Deep Learning', which refers to the two main components of its architecture." />
            </div>
            <div className='r2d2__whatr2d2-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className = "r2d2__whatr2d2-container">    
                <Feature 
                    title = "Chatbots"
                    text= "Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor."
                />
                <Feature 
                    title = "Knowledgebase"
                    text = "Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor."
                />
                <Feature 
                    title = "Education"
                    text = "Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor."
                />
            </div>
        </div>
    )
}

export default WhatR2D2