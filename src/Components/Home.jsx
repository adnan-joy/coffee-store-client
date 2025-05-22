import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const[coffees,setCoffees] =useState(initialCoffees);

    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                coffees.map(coffee => <CoffeeCard 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    >

                    </CoffeeCard>)
            }
        </div>
    );
};

export default Home;