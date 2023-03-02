import React from 'react';
import './index.css'
import Logor from './images/Logo.png'
import monogram from './images/Monogram.png'
import vector from './images/Vector.png'
import inst from './images/instagram.png'
import ini from './images/linkedin.png'
import Line4 from './images/Line 4.png'
interface Props {
footertitle?:string
}
export const Footer:React.FC<Props>= ({footertitle}) =>{
return(
<> 
<div className='footer'>
<div className='logos'>
<img src={Logor} alt="kokok"/> 
<p  className='linkLittle'>Digitaldastin by Dastin Darmawan</p>
<div className='pictures'>
<img alt="fff" src={monogram} /> 
<img alt="fff" src={vector} /> 
<img alt="fff" src={inst} /> 
<img alt="fff" src={ini} /> 
</div>
</div>
<aside>
<div className='links'>
<a href='www' className='linkheadls'>Category</a>
<a href='www' className='linkLittle'>CSS</a>
<a href='www' className='linkLittle'>Javascript</a>
<a href='www' className='linkLittle'>Tailwind</a>
<a href='www' className='linkLittle'>React JS</a>
<a href='www' className='linkLittle'>More Category</a>
</div>
<div className='links'>
<a href='www' className='linkheadls'>About Me</a>
<a href='www' className='linkLittle'>About Me</a>
<a href='www' className='linkLittle'>Projects</a>
<a href='www' className='linkLittle'>Achievement</a>
</div>
<div className='links'>
<a href='www' className='linkheadls'>Get in touch</a>
<a href='www' className='linkLittle'>+62-8XXX-XXX-XX</a>
<a href='www' className='linkLittle'>demo@gmail.com</a>
</div>
<div className='links'>
<a href='www' className='linkheadls'>Follow Us</a>
<a href='www' className='linkLittle'>Medium</a>
<a href='www' className='linkLittle'>Instagram</a>
<a href='www' className='linkLittle'>Twitter</a>
<a href='www' className='linkLittle'>Facebook</a>
</div>
</aside>
</div>
<div className='container'>
<img alt="fff" src={Line4} /> 
<div className='text4'>
<p className='textlittle'>© 2022 Digitaldastin</p>
<p className='textlittle'>Made With ❤️ Jakarta, Indonesia</p>
</div>
</div>
</>
)
}