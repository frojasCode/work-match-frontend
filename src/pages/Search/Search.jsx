import { useState } from 'react';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { BusinessCard } from '../../components/BusinessCard/BusinessCard';
import { getBusinessCardList } from '../../services/Business/GetBusinessCardList';
import { useAsync } from '../../hooks';

export const Search = () => {
	const [businessCardData, setBusinessCardData] = useState([]);
	const { callEndpoint } = useFetchAndLoad();

	const getBusinessCardApiData = async () => {
		return callEndpoint(await getBusinessCardList());
	};

	const handleData = (data) => {
		setBusinessCardData(data.data);
	};

	useAsync(getBusinessCardApiData, handleData);

	return (
		<div className='business-card-data'>
			{businessCardData.map((business) => (
				<BusinessCard
					ruc={business.attributes.ruc}
					name={business.attributes?.nombre}
					logoUrl={business.attributes?.logo?.data?.attributes?.url}
					links={[]}
					sector={business.attributes?.sector_economico}
					workerSize={business.attributes?.sector_economico}
					isSaved={false}
					key={business.id}
				/>
			))}
		</div>
	);
};
