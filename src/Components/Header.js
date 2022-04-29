import React from 'react'
import image from '../images/1.png'

const Header = () => {
    return (
        <div className="title">
            <img className="logo" src={image} alt="logo" />
            <h2>Your Pictures</h2>
            <p>Add Your Pictures Here</p>
        </div>
    )
}

export default Header;