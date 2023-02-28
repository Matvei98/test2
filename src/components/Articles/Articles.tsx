import React from 'react';
import './index.css'
import Line1 from './Images/Line 3.png'
import Line2 from './Images/Frame 286.png'
import Post1 from './Images/Post1.png'
import Post2 from './componets/Section2/Post2.png'
import Post3 from './componets/Section2/Post3.png'
import Post4 from './componets/Section2/Post4.png'
import Post5 from './componets/Section2/Post5.png'
import Post6 from './componets/Section2/Post6.png'
import Post7 from './componets/Section2/Post7.png'
import Post8 from './componets/Section2/Post8.png'
import Post9 from './componets/Section2/Post9.png'
import Post10 from './componets/Section2/Post10.png'
import Post11 from './componets/Section2/Post11.png'
import Post12 from './componets/Section2/Post12.png'

interface Props{
articletitle?:string
}
export const Articles:React.FC<Props>= ({articletitle}) => {
return(
<>
<section className='section2'>
<article className='sec1'>
<div className='write1'>
<img src={Line1} alt="pictures"/>
<Headlines text='Featured Article'/>
</div>
<div className='write2'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/>
</div>
</article>
<div className='Posts1'>
<img src={Post1} alt="pictures"/>
<img src={Post2} alt="pictures"/>
<img src={Post3} alt="pictures"/>
<img src={Post4} alt="pictures"/>
</div>
<article className='sec2'>
<div className='write3'>
<img src={Line1} alt="pictures"/>
<Headlines text='CSS'/> 
</div>
<div className='write4'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/> 
</div>
</article>
<div className='Posts2'>
<img src={Post5} alt="pictures"/>
<img src={Post2} alt="pictures"/>
<img src={Post6} alt="pictures"/>
<img src={Post3} alt="pictures"/>
</div>
<article className='sec3'>
<div className='write5'>
<img src={Line1} alt="pictures"/>
<Headlines text='Javascript'/>
</div>
<div className='write6'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/>
</div>
</article>
<div className='Posts3'>
<img src={Post7} alt="pictures"/>
<img src={Post1} alt="pictures"/>
<img src={Post8} alt="pictures"/>
<img src={Post9} alt="pictures"/>
</div>
<article className='sec4'>
<div className='write7'>
<img src={Line1} alt="pictures"/>
<Headlines text='React JS'/>
</div>
<div className='write8'>
<img src={Line2} alt="pictures"/>
<Headlines text='See All Article'/> 
</div>
</article>
<div className='Posts4'>
<img src={Post10} alt="pictures"/>
<img src={Post11} alt="pictures"/>
<img src={Post12} alt="pictures"/>
<img src={Post4} alt="pictures"/>
</div>
<button className='smal1'>More Article</button>
</section>
</>
)
}
