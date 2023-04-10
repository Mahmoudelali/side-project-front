import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { CrudOperations } from '../App.jsx';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { windowExpand } from '../App.jsx';

const Dash_Products = ({ name, image, price, _id }) => {
	const [crudFunctions, setCrudFunctions] = useContext(CrudOperations);
	const [editViewExpanded, setEditViewExpanded] = useContext(windowExpand);

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
			<td
				onClick={() => {
					setEditViewExpanded(!editViewExpanded);
				}}
			>
				<NavLink
					to={`http://localhost:5173/admin/dashboard/products/${_id}`}
				>
					<Grid item xs={1}>
						<EditIcon />
					</Grid>
				</NavLink>
			</td>
			<td>
				<button
					onClick={() => {
						crudFunctions.handleDeleteProduct(_id);
					}}
					style={{ all: 'unset', cursor: 'pointer' }}
					className="btn"
				>
					<Grid item xs={1}>
						<DeleteIcon />
					</Grid>
				</button>
			</td>
		</tr>
	);
};

export default Dash_Products;
