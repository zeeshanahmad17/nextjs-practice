'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductsPage = () => {
	const router = useRouter();
	const handleOrder = () => {
		console.log('order placed successfully');
		router.push('/');
	};
	return (
		<div>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full'
				onClick={handleOrder}>
				Place Order
			</button>
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
