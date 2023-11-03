import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <Link to='/orders'>All orders</Link>
            <Link to='/orders/create'>Create order</Link>
        </nav>
    );
}

export default Navigation;