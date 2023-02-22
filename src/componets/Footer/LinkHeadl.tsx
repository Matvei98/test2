import React from 'react'
interface Props {
linkheadl: string
}
export const LinkHeadl: React.FC<Props> = ({ linkheadl }) => {
		return <>
<a href='www' className='LinkHeadl'>{linkheadl}</a>
</>
}