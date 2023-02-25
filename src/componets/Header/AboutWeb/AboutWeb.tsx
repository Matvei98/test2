import React from 'react'
import './AboutWeb.css'
import Line from  './Images/Line.png'
import LogoWelcome from './Images/learn-coding.png'
import Scroll from './Images/Scroll.png'

export const Aboutweb = () => {
return <>
<div className="scrolls">
<div className='block1'>
<div className='block_item1'>
<h1> Hi, I’m Dasteen 
Front End Dev </h1> 
</div>
<div className='block_item2'>
<img src={Line} alt="pictures"/>
<p className='subscribe1'>On this blog I share tips and tricks, frameworks, projects, tutorials, etc
Make sure you subscribe to get the latest updates</p>
</div>
<div className='block_item3'>
<input type='email' placeholder='Enter your email here...' className='frame6'/>
<button className='smell'>Subscribe</button>
</div>
</div>
<div className='block2'>
<img src={LogoWelcome} alt="pictures"/>
</div>
</div>
<picture>
<img src={Scroll} alt="pictures" className='pic2'/>
</picture>
</>
}