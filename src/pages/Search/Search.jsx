import { useState } from 'react';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { BusinessCard } from '../../components/BusinessCard/BusinessCard';
import { getBusinessCardList } from '../../services/Business/GetBusinessCardList';
import { useAsync } from '../../hooks';
import { useSearchParams } from 'react-router-dom';
import { PaginationRow } from '../../components/PaginationRow/PaginationRow';

export const Search = () => {
	const [queryString] = useSearchParams();
	const [businessCardData, setBusinessCardData] = useState([]);
	const { callEndpoint } = useFetchAndLoad();
	const [count, setCount] = useState(0);

	const sectorEconomicoQuery = queryString.get('sectorEconomico');
	const regionQuery = queryString.get('region');
	const sizeBusinessQuery = queryString.get('tamaño');
	const propositoQuery = queryString.get('proposito');
	const premiosQuery = queryString.get('premios');
	const avisoPublicadoQuery = queryString.get('avisos');
	const currentPage = +queryString.get('page') ?? 1;

	const offSetIncrement = 12;
	const [offSet, setOffset] = useState(currentPage * offSetIncrement);
	const limit = 12;

	const handlePremiosPropositosAvisos = (business) => {
		const arrayValues = [];
		if (!!business?.premios?.length && !!business?.certificaciones) {
			arrayValues.push("Premios y certi.");
		}

		if (!!business?.valores?.length) {
			arrayValues.push("Propósitos y val.");
		}

		if (!!business?.puestos_publicados) {
			arrayValues.push("Avisos publicados.");
		}

		return arrayValues;
	}
	
	const getBusinessCardApiData = async () => {
		return callEndpoint(await getBusinessCardList(offSet, limit));
	};

	const handleData = (data) => {
		setCount(data?.meta?.count / limit);
		setBusinessCardData(data?.test1?.rows);
	};

	useAsync(getBusinessCardApiData, handleData);

	return (
		<>
		<div className='business-card-data'>
			{businessCardData?.map((business) => (
				<BusinessCard
					ruc={business.ruc}
					name={business.nombre}
					logoUrl={business.attributes?.logo?.data?.attributes?.url}
					links={handlePremiosPropositosAvisos(business)}
					sector={business.sector_economico}
					workerSize={business.trabajadores}
					isSaved={false}
					key={business.ruc}
				/>
			))}
		</div>
		<PaginationRow totalNumber={count}/>
		</>
	);
};
