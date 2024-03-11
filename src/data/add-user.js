const data = require('./seed-data.js')

const {registerEndPoint} = data

const myUser = {
    name: "bebekjk",
    email: "kevinjk@gmail.com",
    password: "bebekjk"
}

async function addUser(user) {
    await fetch(registerEndPoint.POST, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((res) => console.log("User added successfully!"))    
}

addUser(myUser)