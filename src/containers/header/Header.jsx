import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/r2d2-white.png';

const Header = ()=>{
    return(
        <div className = "r2d2__header section__padding" id = "home">
            <div className = "r2d2__header-content">
                <h1 className = "gradient__text"> Let's build something amazing with R2D-2 Open AI</h1>
                <p>
                    R2D2 is a new AI Technology that is designed to help human decision-making process
                    and learn from experience. The acronym stand for "Reinforcement to Recursive Deep Learning",
                    which refers to the two main components of its architecture.
                </p>
                <div className = "r2d2__header-content_input">
                    <input type = "email" placeholder='Your e-mail address'/>
                    <button type = "button btn">Get Started</button>
                </div>
                <div className = "r2d2__header-content_people">
                    <img src= {people} alt = "images of people who use R2D2"/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className = "r2d2__header-image">
                <img src = {ai} alt = "r2d2 blueprint"/>
            </div>
        </div>
    )
}

export default Header