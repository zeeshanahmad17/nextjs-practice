'use client';
import React from 'react';

const ReviewErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<>
			<button
				onClick={reset}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
				Try Again
			</button>
			<div className='text-red-700'>{error.message}</div>;
		</>
	);
};

export default ReviewErrorPage;
