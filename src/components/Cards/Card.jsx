import React from 'react'

import './card.css'
import unavailableImg from '../../assets/unavailableImg.png'
import { AiFillStar } from "react-icons/ai";


const Card = (props) => {
	return (
		<div className=' card'>
			<div className='img__container'>
				<img src={props.img  ? props.img : unavailableImg } alt={unavailableImg} />
			</div>
			<div className='showname__rating'>
				<p>{props.showName}</p>
				<p className='show__rating'>
					<span>Rating: &nbsp;</span>
					<span> {props.rating ? props.rating : "--"}<AiFillStar style={{ fontSize: 16, position: "relative", top: 3 }} /></span>
				</p>
			</div>

		</div>
	)
}

export default Card