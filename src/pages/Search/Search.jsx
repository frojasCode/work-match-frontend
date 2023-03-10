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

	const filterStringBuilder = (queryName, query) =>
		`filters[${queryName}]${query}`;

	const filterArray = [];

	sectorEconomicoQuery
		? filterArray.push(
				filterStringBuilder('sector_economico', '=' + sectorEconomicoQuery)
		  )
		: '';
	regionQuery
		? filterArray.push(filterStringBuilder('region', '=' + regionQuery))
		: '';
	sizeBusinessQuery
		? filterArray.push(filterStringBuilder('tamaño', '=' + sizeBusinessQuery))
		: '';
	propositoQuery
		? filterArray.push(
				filterStringBuilder(
					'valores',
					'[$null]=false&filters[por_que_nosotros][$null]=false'
				)
		  )
		: '';
	premiosQuery
		? filterArray.push(
				filterStringBuilder(
					'premios',
					'[$null]=false&filters[certificaciones][$null]=false'
				)
		  )
		: '';
	avisoPublicadoQuery
		? filterArray.push(
				filterStringBuilder('puestos_publicados', '[$null]=false')
		  )
		: '';

	const offSetIncrement = 12;
	const [offSet, setOffset] = useState(currentPage * offSetIncrement);
	const limit = 12;

	const handlePremiosPropositosAvisos = (business) => {
		const arrayValues = [];
		if (!!business?.premios?.length && !!business?.certificaciones) {
			arrayValues.push('Premios y certi.');
		}

		if (!!business?.valores?.length) {
			arrayValues.push('Propósitos y val.');
		}

		if (!!business?.puestos_publicados) {
			arrayValues.push('Avisos publicados.');
		}

		return arrayValues;
	};

	const getBusinessCardApiData = async () => {
		return callEndpoint(await getBusinessCardList(offSet, limit, filterArray));
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
						logoUrl={"https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}
						links={handlePremiosPropositosAvisos(business)}
						sector={business.sector_economico}
						workerSize={business.trabajadores}
						isSaved={false}
						key={business.ruc}
					/>
				))}
			</div>
			<PaginationRow totalNumber={count} />
		</>
	);
};
