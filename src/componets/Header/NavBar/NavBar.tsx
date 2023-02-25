import React from 'react'
import '.componets/Header/NavBar.css'
import  Logor from './Images/Logo.png'
import Lupa from './Images/lupa.svg'
interface Props {
buttoninput?:string;
}
export const Navbar:React.FC<Props> = ({buttoninput}) => {
return <>
<div className ="navBar">
<div className='container1'>
<img src={Logor} alt="kokok"/> 
</div>
<div className="container2">
<a href='www' className='nav_item'>Home</a>
<a href='www' className='nav_item'>Category</a>
<a href='www' className='nav_item'>About Me</a>
<img src={Lupa} alt="pictures" className='lupa'/>
<a href='www' className='nav_item'>Search</a>
</div>
<div className='container3'>
<button className='smal'><p className='button_title'>{buttoninput}Buy Me a Coffee</p></button>
</div>
 </div>
</>
}