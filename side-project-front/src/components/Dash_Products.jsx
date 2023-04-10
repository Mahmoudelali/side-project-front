import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
// global variables
import { CrudOperations } from '../App.jsx';
import { windowExpand } from '../App.jsx';
// mui icons
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Switcher from './Switcher.jsx';

const Dash_Products = ({ name, image, price, _id, onPage }) => {
	const [crudFunctions, setCrudFunctions] = useContext(CrudOperations);
	const [editViewExpanded, setEditViewExpanded] = useContext(windowExpand);
	const [hidden, setHidden] = useState(onPage ? true : false);

	return (
		<tr style={{ paddingTop: '30px' }}>
			<td style={{ color: 'GrayText' }}>{name}</td>
			<td
				style={{
					width: '100px',
					height: '70px',

					padding: 0,
				}}
			>
				<img
					style={{
						maxWidth: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
					src={`http://localhost:4000/${image.filename}`}
					alt=""
				/>
			</td>
			<td style={{ color: 'GrayText' }}>{price}</td>
			<td>
				<button
					style={{ background: 0 }}
					onClick={() => {
						setHidden(!onPage);
					}}
				>
					<Switcher hidden={hidden} setHidden={setHidden} _id={_id} />
				</button>
			</td>
			<td
				onClick={() => {
					setEditViewExpanded(!editViewExpanded);
				}}
				style={{ color: 'red' }}
			>
				<button className="edit-icon" style={{ background: 0 }}>
					<NavLink
						to={`http://localhost:5173/admin/dashboard/products/${_id}`}
					>
						<Grid item xs={1}>
							<EditIcon />
						</Grid>
					</NavLink>
				</button>
			</td>
			<td>
				<button
					onClick={() => {
						crudFunctions.handleDeleteProduct(_id);
					}}
					style={{
						all: 'unset',
						cursor: 'pointer',
					}}
					className="btn delete-icon"
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
