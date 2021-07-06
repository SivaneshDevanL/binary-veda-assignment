import React from 'react';

export default function ApiTeam({img2,img3,img4}){
return(
    <div id='flex6'>
            <div className='insideflex'>
                <img src={img4} alt='api'/>
                <h2>Dedicated API team</h2>
                <p className='p6'>Our team are available for user's questions via</p>
                <p className='p5'> our Slack Developer Community and Email.</p>
            </div>
            <div className='insideflex'>
                <img src={img2} alt='graph'/>
                <h2>Our API uses Graph QL</h2>
                <p className='p6'>No handling server.Get many API's</p>
                <p className='p5'>responses in a single request.</p>
            </div>
            <div className='insideflex'>
                <img src={img3} alt='supercharge'/>
                <h2>Supercharge your workflow</h2>
                <p className='p6'>Automate workflows integrate and analyse data</p>
                <p className='p5'>and take Marvel to the next level.</p>
            </div>
        </div>
)
}