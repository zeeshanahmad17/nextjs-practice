import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'About',
	description: 'You are viewing About Us',
};

const page = () => {
	return <div>About Us</div>;
};

export default page;
