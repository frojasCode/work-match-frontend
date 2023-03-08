import { GetMethod } from '../Axios/AxiosService';

export const getBusinessCardList = async (offset, limit, filterArray) => {
	const filterQueryString = '&' + filterArray.join("&");
	console.log({filterQueryString});
	const apiPath =
		`empresasCards?offset=${offset}&limit=${limit}${filterQueryString}`;
    return GetMethod(apiPath);
};
