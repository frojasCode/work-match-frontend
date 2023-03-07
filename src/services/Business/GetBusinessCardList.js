import { GetMethod } from '../Axios/AxiosService';

export const getBusinessCardList = async () => {
	const apiPath =
		'empresas?sort%5B0%5D=ruc&fields%5B0%5D=ruc&fields%5B1%5D=nombre&fields%5B2%5D=sector_economico&fields%5B3%5D=trabajadores&populate%5Blogo%5D%5Bfields%5D%5B0%5D=url&pagination%5BpageSize%5D=10&populate%5Bvalores%5D=*&populate%5Bpremios%5D=*&populate%5Bcertificaciones%5D=*';
    return GetMethod(apiPath);
};
