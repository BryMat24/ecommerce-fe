const baseUrl = "http://localhost:8080";

const data = {
    access_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXZpbmprQGdtYWlsLmNvbSIsImV4cCI6MTcxMDE0MDg4MywiaWF0IjoxNzEwMTA0ODgzfQ.TYeMsuB3Q2i85lQAotx9WZR2K8N7NjUuYPFzWd7fjfw",

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