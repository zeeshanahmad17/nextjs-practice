'use client';
import { notFound } from 'next/navigation';
import React from 'react';

const getRandomInt = (count: number): number => {
	return Math.floor(Math.random() * count);
};
const ReviewDetailPage = ({ params }: { params: { productId: string; reviewId: string } }) => {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error('Error loading review!');
	}
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
