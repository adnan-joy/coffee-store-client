import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { _id, photo, name, price, quantity, supplier, taste, details } =
		coffee;
	const handleUpdateCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const updatedCoffee = Object.fromEntries(formData.entries());
		console.log(updatedCoffee);

		// Updated Coffee send to the DB
		fetch(`http://localhost:3000/coffees/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log("Updated Successfully");
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Your Coffee has been updated",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<div className="p-24">
			<div className="p-12 text-center space-y-4">
				<h1 className="text-6xl">Update Coffee</h1>
			</div>
			<form onSubmit={handleUpdateCoffee}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Name</label>
						<input
							type="text"
							name="name"
							defaultValue={name}
							className="input w-full"
							placeholder="Enter Coffee Name"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Quantity</label>
						<input
							type="number"
							name="quantity"
							defaultValue={quantity}
							className="input w-full"
							placeholder="Enter Quantity"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Supplier</label>
						<input
							type="text"
							name="supplier"
							defaultValue={supplier}
							className="input w-full"
							placeholder="Enter Coffee Supplier"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Taste</label>
						<input
							type="text"
							name="taste"
							defaultValue={taste}
							className="input w-full"
							placeholder="Enter Coffee Taste"
						/>
					</fieldset>

					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Price</label>
						<input
							type="text"
							name="price"
							defaultValue={price}
							className="input w-full"
							placeholder="Price per cup"
						/>
					</fieldset>
					<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
						<label className="label">Details</label>
						<input
							type="text"
							name="details"
							defaultValue={details}
							className="input w-full"
							placeholder="Enter Coffee Details"
						/>
					</fieldset>
				</div>

				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
					<label className="label">Photo</label>
					<input
						type="text"
						name="photo"
						defaultValue={photo}
						className="input w-full"
						placeholder="Enter Photo URL"
					/>
				</fieldset>

				<input
					type="submit"
					className="btn w-full"
					value="Update Coffee"></input>
			</form>
		</div>
	);
};

export default UpdateCoffee;
