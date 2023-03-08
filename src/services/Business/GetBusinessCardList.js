import { GetMethod } from '../Axios/AxiosService';

export const getBusinessCardList = async (offset, limit) => {
	const apiPath =
		`empresasCards?offset=${offset}&limit=${limit}`;
    return GetMethod(apiPath);
};
