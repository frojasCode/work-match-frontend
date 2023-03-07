import { useEffect, useState } from 'react';

const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(true);
    let controller;

    const callEndpoint = async (axiosCall) => {
        if (axiosCall?.controller != null) controller = axiosCall.controller;
        let result;
        try {
            result = await axiosCall.call;
        } catch (err) {
            setLoading(false);
            throw err;
        }
        setLoading(false);
        return result;
    };

    const cancelEndpoint = () => {
        setLoading(false);
        if (controller != null) {
            controller.abort();
        }
    };

    useEffect(() => {
        return () => {
            cancelEndpoint();
        };
        /* eslint-disable */
    }, []);

    return { loading, callEndpoint };
};

export default useFetchAndLoad;
