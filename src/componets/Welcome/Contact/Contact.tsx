import React from 'react'
import './Contact.css'
interface Props {
title:string
}
export const ContactEmail: React.FC<Props> = ({title}) => {
return <>
<input type='email' placeholder='Enter your email here...' className='frame6'/>
<button className='smell'>{title}</button>
</>
};
	


