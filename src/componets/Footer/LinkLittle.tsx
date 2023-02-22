import React from 'react'
import './LinkLittle.css'
interface Props {
littletittle: string
}
export const LinkLittle: React.FC<Props> = ({ littletittle }) => {
	return <>
<a href='www' className='LinkLittle'>{littletittle}</a>
</>
}