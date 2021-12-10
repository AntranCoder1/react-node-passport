import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">
                AnTran App
            </span>
            <ul className="list">
                <li className="listItem">
                    <img 
                        src="https://i.pinimg.com/564x/00/3a/9e/003a9e4dd4888c5feb6f05b5d4882921.jpg"
                        className="avatar"
                        alt=""
                    />
                </li>
                <li className="listItem">Thu Hường</li>
                <li className="listItem">
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default Navbar
