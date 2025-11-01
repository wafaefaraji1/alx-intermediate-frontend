import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ image, title, description, price, rating, onButtonClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="mt-2 font-bold">${price}</p>
        <p className="text-yellow-500">Rating: {rating}</p>
        <button onClick={onButtonClick} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
