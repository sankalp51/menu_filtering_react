import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';


const Menu = () => {

    const menuItems = useSelector(state => state.menu.items);

    return (
        <section className="container mx-auto px-4 py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {menuItems.map(item => (
                <Card
                    key={item.id}
                    imageUrl={item.image_url}
                    title={item.name}
                    price={item.price}
                    description={item.description}
                />
            ))}
        </section>
    );
};

export default Menu;
