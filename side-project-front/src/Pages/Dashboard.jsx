import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../App.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../components/Loader.jsx';

const Dashboard = ({ products }) => {
	return (
		<div>
			<nav>
				<h1>Dashboard</h1>
				<NavLink to="/logout">logout</NavLink>
				<NavLink to="/admin/dashboard/products">products</NavLink>
				<NavLink to="/admin/dashboard/settings">settings</NavLink>
				<NavLink to="/admin/dashboard/add"> add new product</NavLink>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Dashboard;
