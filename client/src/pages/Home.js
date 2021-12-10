import React from 'react';
import Card from '../components/Card';
import { posts } from '../data';

const Home = () => {
    return (
        <div className="home">
            { posts.map((item) => (
                <Card key={item.id} posts={item} />
            )) }
        </div>
    )
}

export default Home
