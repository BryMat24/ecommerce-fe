import { apiClient } from '@/lib/axios';

const FetchClient = {
    async get(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await apiClient(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await apiClient(url);
        }
    },
    async post(url, body, includeAccessToken = true) {
        if (includeAccessToken) {
            return await apiClient.post(url, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await apiClient.post(url, body);
        }
    },
    async put(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await apiClient.put(url, null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await apiClient.put(url);
        }
    },
    async delete(url, includeAccessToken = true) {
        if (includeAccessToken) {
            return await apiClient.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else {
            return await apiClient.delete(url);
        }
    }
};

export default FetchClient;
