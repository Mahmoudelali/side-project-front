import React from 'react';
import '../styles/login.css';
import { useFormik } from 'formik';
import axios from 'axios';

const Settings = () => {
	const adminData = useFormik({
		initialValues: {
			isAdmin: true,
		},
	});
	
	const handleAddAdmin = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:4000/api/user/create`, adminData.values)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					window.alert('Admin added successfully');
					document.getElementById('add_admin_form').reset();
				} else {
					window.alert(res.data.message);
				}
			})
			.catch((err) => {
				window.alert('Error: ' + `User Creation Failed`);
				console.log(err.message);
			});
	};

	return (
		<div className="settings-conntainer login-container">
			<form
				id="add_admin_form"
				className="padding-top--24 padding-bottom--48 padding-horizontal--48"
				onSubmit={handleAddAdmin}
			>
				<h4 className="title">Add Admin</h4>
				<label className=" mb-10 label block" htmlFor="name">
					name
					<input
						onChange={adminData.handleChange}
						className=" input w-100 block"
						type="text"
						id="name"
						name="name"
					/>
				</label>
				<label className=" mb-10 label block" htmlFor="email">
					email
					<input
						onChange={adminData.handleChange}
						className=" input w-100 block"
						type="email"
						name="email"
						id="email"
					/>
				</label>
				<label className=" mb-10 label block" htmlFor="username">
					username
					<input
						onChange={adminData.handleChange}
						className=" input w-100 block"
						type="text"
						name="username"
						id="username"
					/>
				</label>
				<label className=" mb-10 label block" htmlFor="password">
					password
					<input
						onChange={adminData.handleChange}
						className=" input w-100 block"
						type="password"
						name="password"
						id="password"
					/>
				</label>

				<button
					type="submit"
					className="btn "
					style={{ margin: '0 auto', display: 'block' }}
				>
					Add Admin
				</button>
			</form>
		</div>
	);
};

export default Settings;
