import React, { createContext, useContext, useState } from 'react';
import Loader from './Loader';
import Product from '../components/Product.jsx';
import Dash_Products from './Dash_Products.jsx';
import EditProduct from './EditProduct';
import { Outlet } from 'react-router-dom';

// export const windowExpand = createContext();
import {windowExpand } from '../App.jsx'

const Products = ({ products }) => {
	// const [Products, setProducts] = useContext(Products);
	const [editViewExpanded, setEditViewExpanded] = useState(false);

	return (
		<windowExpand.Provider value={[editViewExpanded, setEditViewExpanded]}>
			<div className="products-container">
				{!products ? (
					<Loader />
				) : (
					<table>
						<thead>
							<tr>
								<th>name</th>
								<th>image</th>
								<th>price($)</th>
								<th>edit</th>
								<th>delete</th>
							</tr>
						</thead>
						<tbody>
							{products &&
								products.map(({ name, price, image, _id }) => (
									<Dash_Products
										setEditViewExpanded={
											setEditViewExpanded
										}
										key={_id}
										name={name}
										price={price}
										image={image}
										_id={_id}
									/>
								))}
						</tbody>
					</table>
				)}
				<Outlet />
			</div>
		</windowExpand.Provider>
	);
};

export default Products;
