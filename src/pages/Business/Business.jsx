import { useState } from 'react';
import { useParams } from 'react-router';
import { BusinessNoPremium } from '../../components/BusinessNoPremium/BusinessNoPremium';
import { BusinessPremium } from '../../components/BusinessPremium/BusinessPremium';
import { useAsync } from '../../hooks';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { GetBusinessInfo } from '../../services/Business/GetBusinessInfo';

export const Business = () => {
	const { ruc } = useParams();

	const [bussinesInfo, setBusinessInfo] = useState({});
	const { loading, callEndpoint } = useFetchAndLoad();

	const getBusinessApiInfo = async () => {
		return callEndpoint(await GetBusinessInfo(ruc));
	};

	const handleData = (data) => {
		setBusinessInfo(data.data);
	};

	useAsync(getBusinessApiInfo, handleData);

	return (
		<main style={{ width: '90%', margin: '100px auto auto auto' }}>
			{!loading && bussinesInfo?.attributes?.premiumBoolean ? (
				<BusinessPremium bussinesInfo={bussinesInfo} />
			) : (
				<BusinessNoPremium bussinesInfo={bussinesInfo} />
			)}
		</main>
	);
};
