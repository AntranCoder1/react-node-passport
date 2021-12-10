import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="card">
            <span className="title">Test</span>
            <img 
                src="https://i.pinimg.com/564x/32/09/9f/32099f942c743a854163d7ad489a7d30.jpg" 
                alt="" 
                className="img" 
            />
            <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
            <button className="cardButton">Read More</button>
        </div>
    )
}

export default Card
