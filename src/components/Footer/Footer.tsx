import React from 'react';
import Logor from './images/Logo.png'
import monogram from './Images/Monogram.png'
import vector from './Images/Vector.png'
import inst from './Images/instagram.png'
import ini from './Images/linkedin.png'
import Line4 from './Images/Line 4.png'
interface Props {
footertitle?:string
}
export const Footer:React.FC<Props>= ({footertitle}) =>{
return(
<> 
<div className='Aboutweb'>
<img src={Logor} alt="kokok"/> 
<p  className='LinkLittle'>Digitaldastin by Dastin Darmawan</p>
<div className='Picturesl'>
<img alt="fff" src={monogram} /> 
<img alt="fff" src={vector} /> 
<img alt="fff" src={inst} /> 
<img alt="fff" src={ini} /> 
</div>
</div>
<div className='Page'>
<div className='Links'>
<a href='www' className='LinkHeadl'>Category</a>
<a href='www' className='LinkLittle'>CSS</a>
<a href='www' className='LinkLittle'>Javascript</a>
<a href='www' className='LinkLittle'>Tailwind</a>
<a href='www' className='LinkLittle'>React JS</a>
<a href='www' className='LinkLittle'>More Category</a>
</div>
<div className='Links'>
<a href='www' className='LinkHeadl'>About Me</a>
<a href='www' className='LinkLittle'>About Me</a>
<a href='www' className='LinkLittle'>Projects</a>
<a href='www' className='LinkLittle'>Achievement</a>
</div>
<div className='Links'>
<a href='www' className='LinkHeadl'>Get in touch</a>
<a href='www' className='LinkLittle'>+62-8XXX-XXX-XX</a>
<a href='www' className='LinkLittle'>demo@gmail.com</a>
</div>
<div className='Links'>
<a href='www' className='LinkHeadl'>Follow Us</a>
<a href='www' className='LinkLittle'>Medium</a>
<a href='www' className='LinkLittle'>Instagram</a>
<a href='www' className='LinkLittle'>Twitter</a>
<a href='www' className='LinkLittle'>Facebook</a>
</div>
</div>	
<div className='footerlittle'>
<img alt="fff" src={Line4} /> 
<div className='text4'>
<p className='textlittle'>© 2022 Digitaldastin</p>
<p className='textlittle'>Made With ❤️ Jakarta, Indonesia</p>
</div>
</div>
</>
)
}