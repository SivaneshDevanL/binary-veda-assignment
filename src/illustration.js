import React from 'react';

export default function Illustration({img1}){
    return(
        <div id='flex4'>
        <div id='p'>   
        <p id='h1'>Let's build the future of design,now.</p>
        <div id='p1'>
        <p>Create amazing tools and integrations for 1 million users or customise Marvel for your team.</p>
        </div>
        <button id='submit'>Submit your app</button>
        <button id='submit1'>View API Docs</button></div>
        <img id='img1' src={img1} alt='illustration'/>
    </div>
    )
}