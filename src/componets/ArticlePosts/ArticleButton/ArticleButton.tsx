import React from 'react';
import './ArticleButton.css'

interface Props{
articlebutton:string
}
export const ArticleButton:React.FC<Props>= ({articlebutton}) => {
return(
<>
<button className='smal1'>{articlebutton}</button>
</>
)
}
