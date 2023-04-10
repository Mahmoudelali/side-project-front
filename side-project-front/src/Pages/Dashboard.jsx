import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/dashboard.css';

// user Data context
import { UserData } from '../App.jsx';

// mui icons
import { Grid } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewCarouselSharpIcon from '@mui/icons-material/ViewCarouselSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddIcon from '@mui/icons-material/Add';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const Dashboard = () => {
	const [userData, SetUserData] = useContext(UserData);
	const sideBarLinks = [
		{
			name: 'Home',
			icon: <HomeSharpIcon />,
			link: '/admin/dashboard',
		},
		{
			name: 'Settings',
			icon: <SettingsSharpIcon />,
			link: '/admin/dashboard/settings',
		},
		{
			name: 'Products',
			icon: <ViewCarouselSharpIcon />,
			link: '/admin/dashboard/products',
		},
		{
			name: 'Add',
			icon: <AddIcon />,
			link: '/admin/dashboard/add',
		},
	];
	return (
		<div className="dash-container">
			<header>
				<div style={{ marginLeft: '10px' }}>
					<h1 className="title" style={{ fontSize: '1.4rem' }}>
						Dashboard{' '}
					</h1>
					<p>
						hello{' '}
						<span>{userData ? userData.username : 'user'}</span>
					</p>
				</div>

				<nav>
					<div style={{ marginTop: 'auto' }}>
						{sideBarLinks.map(({ name, icon, link }, index) => {
							return (
								<NavLink key={index} to={link}>
									<Grid
										className="inline-block vertical-align-middle "
										item
										xs={1}
									>
										{icon}
									</Grid>
									<div className="vertical-align-middle inline-block side-link-margin ">
										{name}
									</div>
								</NavLink>
							);
						})}
					</div>

					<div className="dash-logout" style={{ marginTop: 'auto' }}>
						<NavLink to="/logout">
							<Grid item xs={1}>
								<LogoutIcon />
							</Grid>
							<div>logout</div>
						</NavLink>
					</div>
				</nav>
			</header>
			<main
				style={{
					flexBasis: '100%',
					display: 'flex',
					justifyContent: 'center',
					padding: '1rem',
				}}
			>
				<Outlet />
			</main>
		</div>
	);
};

export default Dashboard;
