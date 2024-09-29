import React from 'react';

const DocsPage = ({
	params,
}: {
	params: {
		slug: string[];
	};
}) => {
	if (params.slug?.length === 2) {
		return (
			<h3>
				Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
			</h3>
		);
	} else if (params.slug?.length === 1) {
		return <h3>Viewing doc for feature {params.slug[0]}</h3>;
	}
	return <h1>Docs Page</h1>;
};

export default DocsPage;
