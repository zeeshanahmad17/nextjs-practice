import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetailPage = ({ params }: { params: { productId: string; reviewId: string } }) => {
	if (parseInt(params.reviewId) > 100) {
		notFound();
	}
	return (
		<div>
			Review {params.reviewId} for Product {params.productId}
		</div>
	);
};

export default ReviewDetailPage;
