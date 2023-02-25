import React from 'react';
import './CardButton.css'
interface Props{
buttoninput:string
classes?:string
titlebutton?:string
}
export const Button:React.FC<Props>= ({classes,buttoninput}) => {
return(
<>
<button className={classes}><p className='button_title'></p>
{buttoninput}</button>
</>
)
}
