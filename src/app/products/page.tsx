import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
	return (
		<div>
			<h3>ProductsPage</h3>
			<ul>
				<li>
					<Link href={'/products/1'}>Product 1</Link>
				</li>
				<li>
					<Link href={'/products/2'}>Product 2</Link>
				</li>
				<li>
					<Link href={'/products/3'}>Product 3</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProductsPage;
