import { BusinessCard } from '../../components/BusinessCard/BusinessCard';

export const Search = () => {
	const mockData = [
		{
			id: '1',
			name: 'Hipermercados Tottus',
			imgUrl:
				'data:image/png;base64,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',
			links: ['Premios y certi.', 'Propositos y val.', 'Avisos publicados'],
			area: 'Financiero',
			workerSize: 'De 15 a 50 trabajadores',
			isSaved: false,
		},
		{
			id: '2',
			name: 'Hipermercados Tottus2',
			imgUrl:
				'data:image/png;base64,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',
			links: ['Premios y certi.', 'Propositos y val.', 'Avisos publicados'],
			area: 'Financiero',
			workerSize: 'De 15 a 50 trabajadores',
			isSaved: false,
		},
		{
			id: '3',
			name: 'Hipermercados Tottus2',
			imgUrl:
				'data:image/png;base64,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',
			links: ['Premios y certi.', 'Propositos y val.', 'Avisos publicados'],
			area: 'Financiero',
			workerSize: 'De 15 a 50 trabajadores',
			isSaved: false,
		},
	];
	return (
		<div className="business-card-data">
			<h1> Search</h1>
			{mockData.map((business) => (
				<BusinessCard
					id={business.id}
					name={business.name}
					logoUrl={business.imgUrl}
					links={business.links}
					area={business.area}
					workerSize={business.workerSize}
					isSaved={business.isSaved}
                    key={business.id}
				/>
			))}
		</div>
	);
};