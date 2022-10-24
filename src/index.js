const express = require('express');
const cors = require("cors");
const rotas = require('./rotas');
const app  = express();

app.use(express.json());
app.use(rotas);
app.use(cors());
app.listen(3000);
