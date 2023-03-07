import axios from 'axios';

// TODO: When we have token
// axios.interceptors.request.use(
//     (config) => {
//         config.headers[HeaderEnum.Authorization] = `Bearer ${
//             localStorage.getItem(LocalStorage.TOKEN_NAME) ?? ''
//         }`;

//         config.headers['cache-control'] = 'public, max-age=300';

//         return config;
//     },
//     async (error) => {
//         return await Promise.reject(error);
//     },
// );

// TODO: Improve all this whole service when we have production build, Move this static URL to some kinda env.
const apiUrl = "https://strapi-workmatch2.herokuapp.com/api/";

export async function GetMethod(path) {
    const finalUrl = createFinalUrl(path ?? '');
    const controller = new AbortController();

    return {
        call: axios.get(finalUrl, {
            signal: controller.signal,
        }),
        controller,
    };
}

export async function PostMethod(
    path,
    body,
) {
    const finalUrl = createFinalUrl(path ?? '');
    const controller = new AbortController();

    if (body !== undefined) {
        return {
            call: axios.post(finalUrl, body, {
                signal: controller.signal,
            }),
            controller,
        };
    }

    return {
        call: axios.post(
            finalUrl,
            {},
            { signal: controller.signal },
        ),
        controller,
    };
}

export function createFinalUrl(path) {
    return apiUrl.concat(path);
}
