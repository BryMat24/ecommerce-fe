import axios from 'axios';

const FetchClient = {
    async get(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await axios.get(url);
        }
    },
    async post(url, body, includeAccessToken = true) {
        console.log(url);
        if (includeAccessToken) {
            return await axios.post(url, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await axios.post(url, body);
        }
    },
    async put(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await axios.put(url, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await axios.put(url);
        }
    },
    async delete(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await axios.delete(url);
        }
    }
};

export default FetchClient;
