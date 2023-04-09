import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';
// import { NavLink } from 'react-router-dom';

const Home = ({ products, categories }) => {
	const [filteredProduct, setFilteredProduct] = useState(null);

	const handleChangeCategory = (e) => {
		if (e.target.value === 'all') {
			setFilteredProduct(products);
		}
		setFilteredProduct(
			products &&
				products.filter((eachProduct) => {
					return eachProduct.category === e.target.value;
				}),
		);
	};

	return !filteredProduct && !categories ? (
		<div className="home-container">
			<div className="home-header">
				<h1>Shop</h1>
			</div>
			<div className="products-container">
				<Loader />
			</div>
		</div>
	) : !filteredProduct ? (
		<div className="home-container">
			<div className="home-header">
				<h1>Shop</h1>

				<form>
					<select
						onChange={handleChangeCategory}
						name="category-filter"
						id="category-filter"
					>
						<option
							value="all"
							onClick={(e) => {
								setFilteredProduct(e.target.value);
							}}
						>
							all
						</option>
						{categories.map((eachCat) => {
							return (
								<option
									key={categories.indexOf(eachCat)}
									value={eachCat}
								>
									{eachCat}
								</option>
							);
						})}
					</select>
				</form>
			</div>
			<div className="products-container">
				{products &&
					products.map(
						({
							name,
							_id,
							description,
							category,
							price,
							image,
						}) => {
							return (
								<Product
									image={image}
									key={_id}
									name={name}
									price={price}
									description={description}
								/>
							);
						},
					)}
			</div>
		</div>
	) : filteredProduct ? (
		<div className="home-container">
			<div className="home-header">
				<h1>filteredProduct</h1>

				<form>
					<select
						onChange={handleChangeCategory}
						name="category-filter"
						id="category-filter"
					>
						<option
							value="all"
							onClick={(e) => {
								setFilteredProduct(e.target.value);
							}}
						>
							all
						</option>
						{categories.map((eachCat) => {
							return (
								<option
									key={categories.indexOf(eachCat)}
									value={eachCat}
								>
									{eachCat}
								</option>
							);
						})}
					</select>
				</form>
			</div>
			<div className="products-container">
				{filteredProduct &&
					filteredProduct.map(
						({
							name,
							_id,
							description,
							category,
							price,
							image,
						}) => {
							return (
								<Product
									image={image}
									key={_id}
									name={name}
									price={price}
									description={description}
								/>
							);
						},
					)}
			</div>
		</div>
	) : (
		<Loader></Loader>
	);
};

export default Home;
