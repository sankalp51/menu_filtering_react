import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="bg-gray-700 text-white p-4 flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">Our Menu</h1>
            <Nav />
        </header>
    );
};

export default Header;
