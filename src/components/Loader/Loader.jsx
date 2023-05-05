import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import './loader.css'

const Loader = () => {
	return (
		<div className='loader'>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#926000"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	)
}

export default Loader