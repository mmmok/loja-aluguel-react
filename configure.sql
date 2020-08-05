drop table if exists aluguel cascade;
drop table if exists cliente cascade;
drop table if exists item cascade;
drop table if exists tipo_item cascade;


create table tipo_item (
    tipo_item_id serial primary key,
    nome text not null
);

create table item (
    item_id serial primary key,
    tipo_item_id integer references tipo_item
);

create table cliente (
    cliente_id serial primary key,
    nome text not null
);

create table aluguel (
    aluguel_id serial primary key,
    item_id integer references item,
    cliente_id integer references cliente,
    data_inicio date not null,
    data_fim date not null,
    valor numeric(8, 2) not null
);


grant select on tipo_item to digivox;
grant insert on tipo_item to digivox;
grant update on tipo_item to digivox;
grant delete on tipo_item to digivox;
grant select on item to digivox;
grant insert on item to digivox;
grant update on item to digivox;
grant delete on item to digivox;
grant select on cliente to digivox;
grant insert on cliente to digivox;
grant update on cliente to digivox;
grant delete on cliente to digivox;
grant select on aluguel to digivox;
grant insert on aluguel to digivox;
grant update on aluguel to digivox;
grant delete on aluguel to digivox;

grant usage on aluguel_aluguel_id_seq to digivox;
grant usage on cliente_cliente_id_seq to digivox;
grant usage on item_item_id_seq to digivox;
grant usage on tipo_item_tipo_item_id_seq to digivox;


insert into tipo_item (nome) values ('Chevrolet Onix');
insert into tipo_item (nome) values ('Fiat Mobi');
insert into tipo_item (nome) values ('Volkswagen Up');
insert into tipo_item (nome) values ('Toyota Corolla');

insert into item (tipo_item_id) values (1);
insert into item (tipo_item_id) values (1);
insert into item (tipo_item_id) values (1);
insert into item (tipo_item_id) values (1);
insert into item (tipo_item_id) values (2);
insert into item (tipo_item_id) values (2);
insert into item (tipo_item_id) values (2);
insert into item (tipo_item_id) values (2);
insert into item (tipo_item_id) values (3);
insert into item (tipo_item_id) values (3);
insert into item (tipo_item_id) values (3);
insert into item (tipo_item_id) values (3);
insert into item (tipo_item_id) values (4);
insert into item (tipo_item_id) values (4);
insert into item (tipo_item_id) values (4);
insert into item (tipo_item_id) values (4);

insert into cliente (nome) values ('Alice');
insert into cliente (nome) values ('Bruno');
insert into cliente (nome) values ('Carlos');
insert into cliente (nome) values ('Diana');

insert into aluguel (item_id, cliente_id, data_inicio, data_fim, valor)
       values (1, 1, '2020-08-02', '2020-08-05', 200);
insert into aluguel (item_id, cliente_id, data_inicio, data_fim, valor)
       values (2, 2, '2020-08-03', '2020-08-03', 240);
insert into aluguel (item_id, cliente_id, data_inicio, data_fim, valor)
       values (3, 3, '2020-08-03', '2020-08-04', 260);
insert into aluguel (item_id, cliente_id, data_inicio, data_fim, valor)
       values (4, 4, '2020-08-01', '2020-08-30', 400);
