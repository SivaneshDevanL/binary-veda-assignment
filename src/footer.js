import React from 'react';

export default function Footer({img}){
    return(
        <>
        <div id='flex9'>
            <img id='img2' src={img} alt='logo'/>
            <div>
                <h4>Overview</h4>
                <p>Why Marvel</p>
                <p>Enterprise</p>
                <p>Pricing</p>
                <p>Request a demo</p>
                <p>Explore</p>
                <p>Apps</p>
                <p>Developer API</p>
            </div>
            <div>
            <h4>Features</h4>
                <p>Wireframing</p>
                <p>Design</p>
                <p>Prototyping</p>
                <p>Collaboration</p>
                <p>Handoff</p>
                <p>Integrations</p>
                <p>Sketch Plugin</p>
            </div>
            <div>
            <h4>Support</h4>
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Security</p>
            </div>
            <div>
            <h4>Marvel</h4>
                <p>Blog</p>
                <p>Our Team</p>
                <p>Contact Us</p>
                <p>Success Stories</p>
                <p>Brand Guidelines</p>
            </div>
            <div>
            <h4>Follow</h4>
                <p>Twitter</p>
                <p>Dribbble</p>
                <p>Facebook</p>
                <p>Github</p>
                <p>Workable</p> 
            </div>
        </div>
        <div id='end'></div>
        </>
    )
}