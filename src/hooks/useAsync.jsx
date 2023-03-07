import { useEffect } from 'react';

export const useAsync = (
    asyncFn,
    successFunction,
    returnFuntion,
    errorFunction,
    dependencies = [],
) => {
    useEffect(() => {
        let isActive = true;
        asyncFn()
            .then((result) => {
                if (isActive) successFunction(result.data);
            })
            .catch((error) => {
                console.log(error);
                if (errorFunction != null) {
                    errorFunction();
                } else {
                    void 0;
                }
            });
        return () => {
            if (returnFuntion != null) {
                returnFuntion();
            }
            void 0;
            isActive = false;
        };
        /* eslint-disable */
    }, dependencies);
};
