create table hotelaria;

drop table if  exists tb_reservas;

drop table if exists tb_hotel

create table tb_hotel (
ID SERIAL PRIMARY KEY,
nome text not null,
cnpj text NOT NULL,
pais text NOT NULL,
estado text not null,
cidade text not null
)

drop table if exists tb_reservas;

create table tb_reservas (
idHotel SERIAL PRIMARY KEY,
numeroreserva integer not null,
dataCheckin TIMESTAMP,
dataCheckout TIMESTAMP,
status INT NOT NULL
)

drop table if exists tb_hospedes;

create table tb_hospedes (
  id serial primary key,
  nome_id text not null,
  sobrenome_id text not null,
  foreign key (nome_id) references tb_reservas(idHotel),
   foreign key (sobrenome_id) references tb_reservas(idHotel)
	
)

insert into tb_hotel(nome,cnpj,pais,estado,cidade) 
values
('trivago',12345678999,'Brasil','BA','Itabuna'),
('Hotel Oceania',12345678979,'Brasil','BA','Eunápolis'),
('Hotel Opaba',12345678949,'Brasil','BA','Ihéus')


insert into tb_hospedes(nome,sobrenome)
values
('Gustavo','Costa'),
('Marcos','Aurélio')
