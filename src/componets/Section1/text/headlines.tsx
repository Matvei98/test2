import React from 'react';
import './headline.css'
interface Props{
text:string
}
export const Headlines:React.FC<Props>= ({text}) => {
return(
<>
<a href='www' className='headline'>{text}</a>
</>
)
}
	