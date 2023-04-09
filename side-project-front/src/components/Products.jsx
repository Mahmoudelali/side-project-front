import React, { useContext } from 'react';
import Loader from './Loader';
import Product from '../components/Product.jsx';
import Dash_Products from './Dash_Products.jsx';
// import { ProductsContext } from '../App.jsx';

const Products = ({ products }) => {
	// const [Products, setProducts] = useContext(Products);
	return (
		<div className="products-container">
			{!products ? (
				<Loader />
			) : (
				<table>
					<thead>
						<tr>
							<th>name</th>
							<th>image</th>
							<th>price</th>
							<th>edit</th>
							<th>delete</th>
						</tr>
					</thead>
					<tbody>
						{products &&
							products.map(({ name, price, image, _id }) => (
								<Dash_Products
									key={_id}
									name={name}
									price={price}
									image={image}
									_id={_id}
								/>
							))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Products;
