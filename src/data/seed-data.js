const baseUrl = "http://localhost:8080";

const data = {
    access_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXZpbmprQGdtYWlsLmNvbSIsImV4cCI6MTcxMDEzMzQ3OSwiaWF0IjoxNzEwMDk3NDc5fQ.DVmbIJQrj6O-hHdQShMkmLX-ByrfRp2ADe8zAttRiBQ",

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