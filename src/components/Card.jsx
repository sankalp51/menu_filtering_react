import React, { memo } from 'react';

const Card = ({ imageUrl, title, price, description }) => {
    return (
        <article className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-800 font-medium mb-2">${price}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </article>
    );
};

export default memo(Card);
