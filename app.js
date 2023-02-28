const express = require("express");
const app = express();
const path = require('path');


// En chrome si pongo http://localhost:3030/, me aparece la pagina creada.
app.listen(3030, () => 
    console.log("Servidor corriendo")
);

app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
    // El __dirname es la posicion actual, y lo voy a concatenar con la direccion del archivo que vamos desde donde estoy parado.
    res.sendFile(path.join(__dirname, "/views/index.html"))
});
app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
});
app.get("/berners-lee", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
});
app.get("/clarke", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
});
app.get("/hamilton", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
});
app.get("/hopper", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hopper.html"))
});
app.get("/lovelace", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
});
app.get("/turing", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"))
});

