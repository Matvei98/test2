import React from 'react';
import Post from './Images/Icon.png'
interface Props {
sendingemailtitle?:string
}
export const Sendingemail:React.FC<Props>= ({sendingemailtitle}) =>{
return(
<>
<section className='section3'>
<img src={Post} alt="pictures" className='post'/>
<div className='text3'>
<h2 className='subscribe2'>Subscribe For the lastest updates</h2>
<p className='text1'>Subscribe to newsletter and never miss the new post every week.</p>
</div>
<div className='button1'>
<input type='email' placeholder='Enter your email here...' className='frame6'/>
<button>Subscribe</button>
</div>
</section>
</>
)
}