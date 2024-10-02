'use client';
import React, { useState } from 'react';

const ProductsTemplate = ({ children }: { children: React.ReactNode }) => {
	const [inputValue, setInputValue] = useState('');

	// template re-renders the components without persisting the state while the layout persists the state
	return (
		<div>
			<input
				className='border-2 border-black'
				type='text'
				value={inputValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
			/>
			{children}
		</div>
	);
};

export default ProductsTemplate;
