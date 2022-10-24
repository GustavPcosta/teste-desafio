const express = require('express');
const { cadastrarReserva, atualizarHospede, listReserva } = require('./controladores/hospede');
const { cadastrarHotel,listHotel, atualizarHotel, buscarHotel } = require('./controladores/hoteis');


const rotas = express();
rotas.post('/hospede',cadastrarReserva);
rotas.put('/hospede',atualizarHospede);
rotas.get('/hospede',listReserva);

rotas.post('/hotel',cadastrarHotel);
rotas.get('/hotel',listHotel);
rotas.put('/hotel',atualizarHotel);
rotas.get('/buscar',buscarHotel);


module.exports = rotas