import React, { useContext, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Loader from './Loader';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import { CrudOperations, windowExpand } from '../App.jsx';

const EditProduct = ({ products }) => {
	const { id } = useParams();
	const [editViewExpanded, setEditViewExpanded] = useContext(windowExpand);
	const [editdata, setEditData] = useState({});
	const [crudFunctions, setCrudFunctions] = useContext(CrudOperations);

	const handleInputChange = (e) => {
		setEditData({ ...editdata, [e.target.name]: e.target.value });
	};
	const mainProduct =
		products &&
		products.filter((prod) => {
			return prod._id === id;
		});

	const product = products && mainProduct[0];
	const { image, name, price, description } = product;

	return !products && !product ? (
		<Loader />
	) : (
		<div
			className="single-product"
			style={{ display: editViewExpanded ? 'flex' : 'none' }}
		>
			<div
				className="flex justify-content-center box-shadow "
				style={{ position: 'relative' }}
			>
				<button
					style={{
						all: 'unset',
						position: 'absolute',
						top: '1rem',
						right: '1rem',
						cursor: 'pointer',
					}}
					onClick={() => {
						setEditViewExpanded(!editViewExpanded);
					}}
				>
					<Grid item xs={1}>
						<CloseIcon />
					</Grid>
				</button>
				<div className="prod-img-container ">
					<img
						src={`http://localhost:4000/${image.filename}`}
						alt="this is an image"
					/>
				</div>
				<div className="flex justify-content-center flex-direction-column">
					<form
						className="padding-top--24 padding-bottom--48 padding-horizontal--48  flex justify-content-center flex-direction-column"
						style={{ minWidth: '400px' }}
					>
						<h2 className="title center">Edit `{name}`</h2>
						<label className="block label" htmlFor="name">
							<span className="block mb-10 ">name</span>
							<input
								onChange={handleInputChange}
								className="input block w-100"
								type="text"
								name="name"
								id="name"
								placeholder={name}
							/>
						</label>

						<label className="block label" htmlFor="price">
							<span className="block mb-10 ">price</span>
							<input
								onChange={handleInputChange}
								className="input block w-100"
								type="price"
								name="price"
								id="price"
								placeholder={price}
							/>
						</label>

						<label className="block label" htmlFor="description">
							<span className="block mb-10 ">description</span>
							<textarea
								onChange={handleInputChange}
								className="input block w-100"
								placeholder={description}
								type="description"
								name="description"
								id="description"
							/>
						</label>
						<button
							className="btn margin-top--24"
							onClick={(e) => {
								e.preventDefault();
								crudFunctions.handeEditProduct(id, editdata);
							}}
						>
							Edit {name}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProduct;
