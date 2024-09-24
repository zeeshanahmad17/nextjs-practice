import React from 'react';

const ReviewDetailPage = ({ params }: { params: { productId: string; reviewId: string } }) => {
	return (
		<div>
			Review {params.reviewId} for Product {params.productId}
		</div>
	);
};

export default ReviewDetailPage;
