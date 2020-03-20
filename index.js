const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("SERVEUR STARTED...");
});

app.use(express.static("./public"));
