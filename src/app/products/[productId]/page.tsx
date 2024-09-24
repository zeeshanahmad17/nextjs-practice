import React from 'react';

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
	return <h4>Product Details of Product {params.productId}</h4>;
};

export default ProductDetailPage;
