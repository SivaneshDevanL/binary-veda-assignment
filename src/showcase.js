import React from 'react';

export default function Showcase({img5}){
    return(
        <div id='flex7'>
        <div id='width'>
        <p className='p2'>Showcase your app in our integrations directory</p>
        <p id='width1'>Building something special?We're always looking to work with partners who wants to help the world bring their ideas to life.</p>
        <button className='submit2'>Become a partner</button>
        <button className='submit3'>View Integrations</button></div>
        <img id='img1' src={img5} alt='showcase'/>
    </div>
    )
}