import React, { useState } from 'react';
import Loader from './Loader';

import Dash_Products from './Dash_Products.jsx';

import { NavLink, Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// export const windowExpand = createContext();
import { windowExpand } from '../App.jsx';

const Products = ({ products }) => {
	// const [Products, setProducts] = useContext(Products);
	const [editViewExpanded, setEditViewExpanded] = useState(false);

	return (
		<windowExpand.Provider value={[editViewExpanded, setEditViewExpanded]}>
			<div className="products-container">
				{!products ? (
					<Loader />
				) : (
					<div>
						<NavLink to={'/admin/dashboard/add'}>
							<button className="btn">
								<Grid item xs={1}>
									<AddIcon />
								</Grid>
								Add new
							</button>
						</NavLink>
						<table>
							<thead>
								<tr>
									<th>name</th>
									<th>image</th>
									<th>price($)</th>
									<th>on-page</th>
									<th>edit</th>
									<th>delete</th>
								</tr>
							</thead>
							<tbody>
								{products &&
									products.map(
										({
											name,
											price,
											image,
											_id,
											onPage,
										}) => (
											<Dash_Products
												setEditViewExpanded={
													setEditViewExpanded
												}
												onPage={onPage ? onPage : null}
												key={_id}
												name={name}
												price={price}
												image={image}
												_id={_id}
											/>
										),
									)}
							</tbody>
						</table>
					</div>
				)}
				<Outlet />
			</div>
		</windowExpand.Provider>
	);
};

export default Products;
