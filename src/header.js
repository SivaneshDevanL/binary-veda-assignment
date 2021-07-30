import React from 'react';

export default function Header({img}){
    return(
        <div id='flex'>
        <div id='flex1'>
        <img id='img' src={img} alt='logo'/>
        <h3 id='h3'>|</h3>
        <h3 id='developer'>Developers</h3></div>
        <div id='flex2'>
        <div id='flex3'>
        <h3>Why Marvel</h3>
        <i id='symbol' class="fas fa-chevron-down"></i></div>
        <h3>Enterprise</h3>
        <h3>Pricing</h3>
        <h3>Sign in</h3>
        <button id='sign'>Sign up free</button></div>
        <i id='line' class="fas fa-grip-lines"></i>
        </div>
    )
}