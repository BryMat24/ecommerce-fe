const data = require("./seed-data.js");

const {categoryEndPoint, access_token} = data;

const categories = [
    {
        name: "Laptop",
    },
    {
        name: "Tablet",
    },
    {
        name: "Mobile",
    },
]

async function addCategory(category){
    await fetch(categoryEndPoint.POST, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(category)
    }).then((res) => console.log("Added Category Successfully"));
}


for(let i=0; i<categories.length; i++){
    addCategory(categories[i]);
}
