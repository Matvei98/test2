import React from 'react'
import './Link.css'
interface Props {
linkTitle: string
}
export const Link: React.FC<Props> = ({ linkTitle }) => {
	return <>
<a href='www' className='nav_item'>{linkTitle}</a>
</>
}