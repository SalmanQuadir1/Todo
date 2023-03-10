import React from 'react'
import './styles/header.css';
import { SiPhpmyadmin } from 'react-icons/si';
const Header = () => {
    return (
        <header>
            <SiPhpmyadmin   size={50}/>
            <a href="">Home</a>
        </header>
    )
}

export default Header