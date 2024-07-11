const baseUrl = "http://localhost:8080";

const data = {
    access_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXZpbmprQGdtYWlsLmNvbSIsImV4cCI6MTcxMDc3NDc0NCwiaWF0IjoxNzEwNzM4NzQ0fQ.ZI6GP59nS2gYpSztrcweW9eyjyDa4jxrK7jTcSP4zdk",

    registerEndPoint: {
        POST: baseUrl + "/register"
    },

    categoryEndPoint: {
        POST: baseUrl + "/category"
    },

    productEndPoint: {
        POST: baseUrl + "/product"
    }
};

module.exports = data;