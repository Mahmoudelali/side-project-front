import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { CrudOperations } from '../App.jsx';

const Dash_Products = ({ name, image, price, _id }) => {
	const [crudFunctions, setCrudFunctions] = useContext(CrudOperations);

	return (
		<tr>
			<td>{name}</td>
			<td style={{ width: '100px', height: '70px' }}>
				<img
					style={{
						maxWidth: '100%',
						height: '100%',
						objectFit: 'contain',
					}}
					src={`http://localhost:4000/${image.filename}`}
					alt=""
				/>
			</td>
			<td>{price}</td>
			<td>
				<NavLink>Edit</NavLink>
			</td>
			<td>
				<button
					onClick={() => {
						crudFunctions.handleDeleteProduct(_id);
					}}
					className="btn"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Dash_Products;
