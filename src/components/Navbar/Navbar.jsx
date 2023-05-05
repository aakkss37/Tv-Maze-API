import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()


	return (
		<div className='navbar'>
			<div className='navbar__container'>

				<div className="container__lhs">
					<p href='/'> TV Maze API </p>
				</div>

				<div className="container__rhs">
					<p onClick={() => navigate('/')} >Home</p>
					<p onClick={() => navigate('/about')}>About</p>
					<button className='contact' onClick={() => navigate('/contact')}>Contact</button>
				</div>

			</div>
		</div>
	)
}

export default Navbar