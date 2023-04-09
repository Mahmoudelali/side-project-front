import React from 'react';
import '../styles/product.css';

// const __dirname = path.resolve();

const Product = ({ image, name, price, description }) => {
	// console.log(image);
	return (
		<div className="card-container">
			<div className="product-image-container mb-10">
				<img
					src={`http://localhost:4000/${image.filename}`}
					alt="product"
				/>
			</div>

			<div className="product-data">
				<div className="product-description ">
					<p>{description}</p>
					<button
						className="add-to-cart btn block"
						style={{
							margin: ' 0 auto',
						}}
					>
						Add To Cart
					</button>
				</div>

				<p style={{ color: 'gray' }} className="center mb-10">
					{name}
				</p>
				<p className="center mb-10">{price}</p>
			</div>
		</div>
	);
};

export default Product;
