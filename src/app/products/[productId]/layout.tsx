import React from 'react';

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<div style={{ backgroundColor: 'lightgrey', padding: '20px' }}>
				<h2 style={{ textAlign: 'center' }}>Featured Products Carousel</h2>
			</div>
		</>
	);
};

export default ProductDetailLayout;
