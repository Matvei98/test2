import React from 'react';
import './frame.css'
interface Props{
title:string
}
export const Text1: React.FC<Props> = ({title}) => {
return <>
<p className='subscribe1'>{title}</p>
</>
};


	
