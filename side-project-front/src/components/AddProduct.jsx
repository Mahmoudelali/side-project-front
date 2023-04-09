import axios from 'axios';
import { useFormik } from 'formik';
import { CrudOperations } from '../App.jsx';

const formFields = [
	{
		label: 'name',
		type: 'text',
		id: 'name',
		name: 'name',
	},
	{
		label: 'price',
		type: 'number',
		id: 'price',
		name: 'price',
	},
	{
		label: 'images',
		type: 'file',
		id: 'images',
		name: 'images',
	},
	{
		label: 'category',
		type: 'select',
		id: 'category',
		name: 'category',
		options: [
			{
				value: 'tech',
				label: 'Tech',
			},
			{
				value: 'home_appliances',
				label: 'Home Appliances',
			},
		],
	},
	{
		label: 'decription',
		type: 'textarea',
		id: 'description',
		name: 'description',
		cols: '30',
		rows: '10',
	},
];

export default function AddProduct() {
	const product = useFormik({
		initialValues: {
			token: `Bearer ${localStorage.getItem('auth_token')}}`,
		},
	});
	console.log(product.values);
	const handleSubmit = (values, { resetForm }) => {
		// Handle form submission here
		console.log(values);
		resetForm();
	};
	// const handleAddProduct = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post('http://localhost:4000/api/item/create', product.values, {
	// 			headers: {
	// 				'auth-token': `Bearer ${localStorage['auth-token']}`,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	return (
		<div className="add-product-container">
			<form
				onSubmit={(e) => {
					CrudOperations.handleAddProduct(e, product.values);
				}}
				style={{ maxWidth: '500px' }}
				encType="multipart/form-data"
				className="padding-top--24 padding-bottom--48 padding-horizontal--48 form"
			>
				<h4 className="title">Add new product</h4>
				{formFields.map(({ label, type, id, name, ...rest }) => (
					<label
						htmlFor={id}
						key={id}
						className="label block margin-bottom--16  "
					>
						<span className="mb-10">{label}</span>
						{type === 'select' ? (
							<select
								className="block"
								onChange={product.handleChange}
								id={id}
								name={name}
								{...rest}
							>
								{...rest.options.map(({ value, label }) => (
									<option value={value} key={value}>
										{label}
									</option>
								))}
							</select>
						) : (
							<input
								className="input block w-100"
								onChange={product.handleChange}
								type={type}
								id={id}
								name={name}
								{...rest}
							/>
						)}
					</label>
				))}
				<button className="btn block" style={{ margin: ' 0 auto' }}>
					Add
				</button>
			</form>
		</div>
	);
}
