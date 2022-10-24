const knex = require('../conexao/conexao');
const schemaReserva = require('../verificacao/reserva')


const cadastrarReserva = async(req,res) =>{
    const {numeroReserva,apartamento,dataCheckin,dataCheckout,status} = req.body;
    try {
      await schemaReserva.validate(req.body);

      if(status != 1){
        return res.status(400).json("Status bloqueado");
      }
      const novaReserva = await knex("tb_reserva").insert({
        numeroReserva,
        apartamento,
        dataCheckin,
        dataCheckout,
        status

      }).returning("*");
      if(!novaReserva){
        return res.status(400).json("Não foi possível cadastrar uma nova reserva");
      }
      return res.status(201).json(novaReserva)
    } catch (error) {
        return res.status(500).json(error.message);

    }
}
const atualizarHospede = async(req,res)=>{
const {idHotel} = req.params;
    const {numeroReserva,apartamento,dataCheckin,dataCheckout,status} = req.body;
     
    try {
      await schemaHospede.validate(req.body);
    const verificarReserva = await knex('tb_reserva').where({numeroReserva}).first();
    if(!verificarReserva){
      return res.status(404).json("Já existe uma reserva com esse número");
   }
   const atualizar = await knex('tb_hotel').where({idHotel}).join('tb_reserva').select("nome","sobrenone").update(numeroReserva,apartamento,dataCheckin,dataCheckout,status);
   if(!atualizar){
        return res.status(400).json("Não foi possível atualizar o hospede")
   }
   return res.status(200).json("Hospede atualizado com sucesso")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const listReserva = async(req,res)=>{
    try {
        const list = await knex('tb_hospedes').select('*');
        if(!list){
            return res.status(400).json("Não foi possível listar os itens pedidos")
        }
        return res.status(200).json(list)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports ={
    cadastrarReserva,
    atualizarHospede,
    listReserva
}