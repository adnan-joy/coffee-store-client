import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee=e=>{
        e.preventDefault();
        const form = e.target;
        const formData= new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send coffee data to the DB

        fetch(`http://localhost:3000/coffees`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log("added successfully");
                Swal.fire({
                    title: "Coffee added successfully",
                    icon: "success",
                    draggable: true
});
            }
        })
    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p className=''>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Quantity</label>
                    <input type="number" name='quantity' className="input w-full" placeholder="Enter Quantity" />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Supplier</label>
                    <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Taste</label>
                    <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Price</label>
                    <input type="text" name='price' className="input w-full" placeholder="Price per cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Details</label>
                    <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
                    </fieldset>

                <input type='submit' className='btn w-full' value="Add Coffee"></input>
                <Link to="/"><a type='submit' className='btn w-full mt-6'>Go to Home</a></Link>
            </form>
        </div>
    );
};

export default AddCoffee;