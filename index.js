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
        birthdate: 01/25/726,
        friends: ["Lucifer", "Cerberus", "Amenadiel"],

    });
});