import React from 'react'
import unavailableImg from '../../assets/unavailableImg.png'

const Card = (props) => {
	return (
		<div className=' card'>
			<div className='img__container'>
				<img src={props.img} alt={unavailableImg} />
			</div>
			<div className='showname__rating'>
				<p>{props.showName}</p>
				<p>{props.rating}</p>
			</div>
			
		</div>
	)
}

export default Card