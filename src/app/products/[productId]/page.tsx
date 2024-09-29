import { Metadata } from 'next';
type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: `Product ${params.productId}`,
	};
};

// can be used as an asynchronous function
// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
// 	const title = await new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(`iPhone ${params.productId}`);
// 		}, 100);
// 	});

// 	return {
// 		title: `Product ${title}`,
// 	};
// };
const ProductDetailPage = ({ params }: Props) => {
	return <h4>Product Details of Product {params.productId}</h4>;
};

export default ProductDetailPage;
