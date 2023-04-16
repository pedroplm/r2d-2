import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';


const Possibility = ()=>{
    return(
        <div className = "r2d2__possibility section__padding" id = "possibility">
            <div className = "r2d2__possibility-image">
                <img src = {possibilityImage} alt = "possibility"/>
            </div>
            <div className='r2d2__possibility-content'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor.</p>
                <h4>Request early access to get Started</h4>
            </div>
        </div>
    )
}

export default Possibility