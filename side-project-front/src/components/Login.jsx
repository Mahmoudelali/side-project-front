import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import { LoginContext } from '../App.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

const fileds = [
	{
		name: 'username',
		type: 'text',
		label: 'Email',
		placeholder: 'Enter your email',
		required: true,
	},
	{
		name: 'password',
		type: 'password',
		label: 'password',
		placeholder: 'Enter your password',
		required: true,
	},
];

const Login = () => {
	axios.defaults.headers.common[
		'auth-token'
	] = `Bearer ${localStorage.getItem('access_token')}`;
	const navigate = useNavigate();

	const [userCredentials, SetUserCredentials] = useState(null);

	const [signedIn, setSignedIn] = useContext(LoginContext);

	const handleInputData = (e) => {
		SetUserCredentials({
			...userCredentials,
			[e.target.name]: e.target.value,
		});
	};

	const loginUser = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/api/user/login', userCredentials)
			.then((res) => {
				console.log(res);
				localStorage.setItem('auth_token', res.data.token);
				res.data.role ? navigate('/admin/dashboard') : navigate('/');
				// navigate('/dashboard');
			})
			.catch((err) => {
				console.log(err.message);
				window.alert('invalid credentials');
			});
	};

	return (
		<div className="flex justify-content-center login-page">
			<div className="login-container ">
				<h2
					className="center title padding-bottom--24"
					style={{ fontSize: '3em', color: '#5469d4' }}
				>
					this is a test
				</h2>

				<form
					className="padding-top--24 padding-bottom--48 padding-horizontal--48"
					style={{
						margin: '0 auto',
						display: 'block',
						backgroundColor: '#fff',
					}}
				>
					<p className="title" style={{ fontSize: '1.2em' }}>
						this is a title
					</p>

					{fileds.map((input) => {
						if (input.name === 'password') {
							return (
								<label
									key={fileds.indexOf(input)}
									htmlFor={input.label}
									className="block  margin-bottom--24 margin-top--24"
								>
									<p className="flex justify-content-between ">
										<span className="label block mb-10 ">
											{input.label}
										</span>
										<span
											className="label block mb-10 "
											style={{
												fontWeight: '400',
												fontSize: '16px',
											}}
										>
											<NavLink to="/forget-password">
												Forgot password ?
											</NavLink>
										</span>
									</p>
									<input
										name={input.name}
										onChange={handleInputData}
										placeholder={input.placeholder}
										type={input.type}
										id={input.type}
										className="input block w-100"
									/>
								</label>
							);
						}
						return (
							<label
								key={fileds.indexOf(input)}
								htmlFor={input.label}
								className="block  margin-bottom--24 margin-top--24"
							>
								<span className="label block mb-10 ">
									{input.label}
								</span>
								<input
									name={input.name}
									onChange={handleInputData}
									placeholder={input.placeholder}
									type={input.type}
									id="email"
									className="input block w-100"
								/>
							</label>
						);
					})}

					<button
						onClick={loginUser}
						style={{ margin: '0 auto', width: '70%' }}
						className="block btn margin-top--24 margin-bottom--24"
					>
						Continue
					</button>

					<p className="center font-16 " style={{ color: '#697386' }}>
						Don't have an account?{' '}
						<a
							href="#"
							style={{ fontWeight: '400', color: '#5469d4' }}
						>
							Sign up
						</a>{' '}
						Now!
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
