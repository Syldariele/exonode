const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED...");
});

app.use(express.static("./public"));

app.get("/get_text", (req, res)=> {
    res.send({
        nom: "Sitael",
        verified: false,
        birthdate: 1/25/726,
        friends: ["Lucifer", "Cerberus", "Amenadiel"],

    });
});

// Commande à mettre dans la console pour test si cela fonctionne
// const divContent = document.getElementById('content');

// const response = await fetch ('get_text');

// const json = await response.json();

// const name = divContent.getElementsByClassName('name')[0];
// const verified = divContent.getElementsByClassName('boolean')[0];
// const birthdate = divContent.getElementsByClassName('birthday')[0];
// const friends = divContent.getElementsByClassName('array')[0];

// name.innerHTML = json.name;
// verified.innerHTML = json.verified;
// birthdate.innerHTML = json.birthdate;
// friends.innerHTML = json.friends;