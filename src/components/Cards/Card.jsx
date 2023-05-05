import React from 'react'
import unavailableImg from '../../assets/unavailableImg.png'

const Card = (props) => {
	console.log(props.img)
	return (
		<div className=' card'>
			<div className='img__container'>
				<img src={props.img  ? props.img : unavailableImg } alt={unavailableImg} />
			</div>
			<div className='showname__rating'>
				<p>{props.showName}</p>
				<p>{props.rating ? props.rating : "--"}</p>
			</div>

		</div>
	)
}

export default Card