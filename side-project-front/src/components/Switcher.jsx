import React, { useContext } from 'react';
import '../styles/Switcher.css';
import { CrudOperations } from '../App.jsx';
const Switcher = ({ hidden, setHidden, _id }) => {
	const [crudFunctions, setCrudFunctions] = useContext(CrudOperations);

	return (
		<div
			className="switcher-container"
			style={{
				justifyContent: hidden ? 'flex-end' : 'flex-start',
			}}
		>
			<div
				className="switcher-circle"
				style={{ backgroundColor: hidden ? '#28a745' : '#dc3545' }}
				onClick={() => {
					crudFunctions.handeEditProduct(
						_id,
						hidden ? { onPage: false } : { onPage: true },
					);
					alert(
						hidden
							? 'product is now Visible'
							: 'product is not  Visible anymore',
					);
					setHidden(!hidden);
				}}
			></div>
		</div>
	);
};

export default Switcher;
