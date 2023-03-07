import { GetMethod } from "../Axios/AxiosService";

export const GetBusinessInfo = async (ruc) => {
    const apiPath = `empresas/${ruc}`;
    return GetMethod(apiPath);
}