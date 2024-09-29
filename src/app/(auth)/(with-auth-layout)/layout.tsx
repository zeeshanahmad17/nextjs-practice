import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactDOM }) => {
	return (
		<>
			<div style={{ backgroundColor: 'lightcyan', padding: '10px', margin: '10px' }}>
				<h3 style={{ textAlign: 'center' }}>Auth Layout</h3>
			</div>
			{children}
		</>
	);
};

export default AuthLayout;
