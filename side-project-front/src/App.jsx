import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Login from './components/Login.jsx';
import Home from './Pages/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';

import Settings from './components/Settings.jsx';
import Products from './components/Products.jsx';
import AddProduct from './components/AddProduct';

export const LoginContext = React.createContext();
export const ProductsProvider = React.createContext();
export const CrudOperations = React.createContext();

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}
function App() {
	const [signedIn, setSignedIn] = useState(false);
	const [products, setProducts] = useState(null);
	const [crudFunctions, setCrudFunctions] = useState({
		getAllProducts: getAllProducts,
		handleDeleteProduct: handleDeleteProduct,
		handleAddProduct: handleAddProduct,
	});

	var arrOfCategories =
		products &&
		products.map((product) => {
			return product.category;
		});

	const uniqueCategories =
		arrOfCategories &&
		arrOfCategories.filter((cat, index) => {
			return onlyUnique(cat, index, arrOfCategories);
		});
	// Add product
	function handleAddProduct(e, values) {
		e.preventDefault();
		axios
			.post('http://localhost:4000/api/item/create', values, {
				headers: {
					'auth-token': `Bearer ${localStorage['auth-token']}`,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// delete a single product
	function handleDeleteProduct(id) {
		products &&
			products.filter((prod) => {
				return prod.id !== products._id;
			});

		axios
			.delete(`http://localhost:4000/api/item/${id}`, { new: true })
			.then((res) => {
				console.log(res);
				alert(res.data.message);
			})
			.catch((err) => {
				console.log(err.message);
			});

		crudFunctions.getAllProducts();
	}
	function getAllProducts() {
		axios
			.get('http://localhost:4000/api/item/')
			.then((res) => {
				console.log(res.data.message);
				setProducts(res.data.message);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

	useEffect(getAllProducts, []);

	return (
		<div style={{ minHeight: '100vh' }}>
			<BrowserRouter>
				<nav>
					<NavLink to={'/admin/dashboard/settings'}></NavLink>
				</nav>
				<CrudOperations.Provider
					value={[crudFunctions, setCrudFunctions]}
				>
					{/* <Products.Provider value={[products, setProducts]}> */}
					<LoginContext.Provider value={[signedIn, setSignedIn]}>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route
								path="/"
								element={
									<Home
										products={products}
										categories={uniqueCategories}
									/>
								}
							/>
							<Route
								path="/admin/dashboard"
								element={<Dashboard />}
							>
								<Route
									path="/admin/dashboard/settings"
									element={<Settings />}
								/>
								<Route
									path="/admin/dashboard/products"
									element={
										<Products
											getAllProducts={getAllProducts}
											products={products}
										/>
									}
								/>
								<Route
									path="/admin/dashboard/add"
									element={<AddProduct />}
								/>
							</Route>
						</Routes>
					</LoginContext.Provider>
					{/* </Products.Provider> */}
				</CrudOperations.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
