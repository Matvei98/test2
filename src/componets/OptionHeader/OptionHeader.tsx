import React from 'react';
import './index.css'
interface Props{
text?:string
}
export const OptionHeader:React.FC<Props>= ({text}) => {
return(
<>
<a href='www' className='headline'>{text}</a>
<section className='section1'>
<div className='section_item1'>
<div className='text1'>
<img src={Line1} alt="pictures"/>
<Headlines text='Browse the category'/>
</div>
<div className='text2'>
<Headlines text='see all category'/>
<img src={Line2} alt="pictures"/>
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
)
}
	