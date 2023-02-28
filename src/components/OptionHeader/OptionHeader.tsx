import React from 'react';
import './index.css'
import Line3 from './Images/Line3.png'
import Frame from './Images/Frame.png'
import Cs  from './Images/css.png'
import Js from './Images/js.png'
import Tailwind from  './Images/tailwind.png'
import  Vu from './Images/vue.png'
import  Rec from './Images/rec.png'


export const  Optionheader = () => {
return<>
<section className='section1'>
<div className='section_item1'>
<div className='text1'>
<img src={Line3} alt="pictures"/>
<a href='www' className='headline'>Browse the category</a>
</div>
<div className='text2'>
<a href='www' className='headline'>see all category</a>
<img src={Frame} alt="pictures"/>
</div>
</div>
<div className='section_item2'>
<img src={Cs} alt="pictures"/>
<img src={Js} alt="pictures"/>
<img src={Tailwind} alt="pictures"/>
<img src={Vu} alt="pictures"/>
<div className='Card5'>
<img src={Rec} alt="pictures"/>
</div>
</div>
</section>
</>
}
	