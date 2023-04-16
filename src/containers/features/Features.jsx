import React from 'react';
import { Feature } from '../../components';
import './features.css';


/* voltar na aula de como usar map para javascript objects de outro arquivo, por enquanto usar isso:*/
const featuresData = [
    {
        title: 'title one',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta interdum tortor ut condimentum. Donec urna lacus, rhoncus quis lacinia et, eleifend nec ante. Nullam nec mattis justo. Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor.        '
    },
    {
        title: 'title two',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta interdum tortor ut condimentum. Donec urna lacus, rhoncus quis lacinia et, eleifend nec ante. Nullam nec mattis justo. Maecenas nec lacus at urna sollicitudin sodales. Suspendisse suscipit sed augue eu blandit. Sed lorem orci, congue id turpis id, dignissim consequat nulla. Nunc odio libero, tristique non est sit amet, pretium suscipit tortor.        '
    },
    {
        title: 'title three',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta interdum tortor ut condimentum. Donec urna lacus, rhoncus quis lacinia et, eleifend nec ante.'
    },
    {
        title: 'title four',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta interdum tortor ut condimentum. Donec urna lacus, rhoncus quis lacinia et, eleifend nec ante.'
    }
]

const Features = ()=>{
    return(
        <div className='r2d2__features section__padding' id = "features">
            <div className = "r2d2__features-heading">
                <h1 className = "gradient__text"> The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access</p>
            </div>
            <div className='r2d2__features-container'>
                {featuresData.map((item, index)=>{
                    return(
                        <Feature key = {index} title = {item.title} text = {item.text}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Features