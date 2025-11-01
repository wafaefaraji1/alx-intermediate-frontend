import React from 'react';
import Card from '../components/common/Card';

const HomePage = () => {
  const handleClick = () => alert('Booking clicked!');

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card
        image="/assets/property1.jpg"
        title="Luxury Apartment"
        description="Beautiful apartment in the city center."
        price={120}
        rating={4.5}
        onButtonClick={handleClick}
      />
      <Card
        image="/assets/property2.jpg"
        title="Cozy House"
        description="Comfortable house in the suburbs."
        price={90}
        rating={4.2}
        onButtonClick={handleClick}
      />
    </div>
  );
};

export default HomePage;
