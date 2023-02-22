import React from 'react';
import './Text2.css'
interface Props{
texttitle?:string
}
export const Text2: React.FC<Props> = ({texttitle}) => {
return <>
<p className='textlittle'>{texttitle}</p>
</>
};
