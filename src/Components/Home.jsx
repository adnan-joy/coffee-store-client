import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const[coffees,setCoffees] =useState(initialCoffees);

    return (
        <div className='mt-12'>
            <div className='flex justify-around mb-12'>
                <h2>Coffee House</h2>

                <div>
                    <Link  to="/addCoffee"><a className='hover:underline'>Add Coffee</a></Link>
                    
                </div>
            </div>
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
        </div>
    );
};

export default Home;