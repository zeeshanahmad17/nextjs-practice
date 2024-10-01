'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const navLinks = [
	{ name: 'Sign Up', href: '/sign-up' },
	{ name: 'Login', href: '/login' },
];
const AuthLayout = ({ children }: { children: React.ReactDOM }) => {
	const pathname = usePathname();
	return (
		<>
			<div
				// style={{ backgroundColor: 'lightcyan', padding: '10px', margin: '10px' }}
				className='flex items-center bg-gray-300 p-3 gap-3'>
				{navLinks.map((link, i) => {
					const isActive = pathname.startsWith(link.href);
					return (
						<Link href={link.href} key={i} className={isActive ? 'font-bold text-red-400' : 'font-bold'}>
							{link.name}
						</Link>
					);
				})}
			</div>
			{children}
		</>
	);
};

export default AuthLayout;
