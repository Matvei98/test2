import React from 'react'
import './Pictures.css'
interface Props {
picturestitle:string
src?:string
}
export const Pictures: React.FC<Props> = ({picturestitle}) => {
return <>
<img alt="fff" src={picturestitle}/> 
</>
}