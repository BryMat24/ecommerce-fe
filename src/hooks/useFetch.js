"use client";
const { useState } = require("react");

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiClient
            .get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`
                }
            })
            .then(({ data }) => {
                setData(snakeToCamel(data.data));
            })
            .catch((error) => {
                ErrorHandler.handleError(error);
            });
    }, []);

    return { data, setData };
};