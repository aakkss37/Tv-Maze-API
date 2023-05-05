import React from 'react'
import { Circles } from 'react-loader-spinner'
import './loader.css'

const Loader = () => {
  return (
	<div className='loader'>
		  <Circles
			  height="50"
			  width="50"
			  color="#926000"
			  ariaLabel="circles-loading"
			  wrapperStyle={{}}
			  wrapperClass=""
			  visible={true}
		  />
	</div>
  )
}

export default Loader