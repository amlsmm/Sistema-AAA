CREATE TABLE SISTEMA_AAA.Coordenador (
    id INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(60),
    codigo VARCHAR(5),
    dt_criacao TIMESTAMP,
    
    CONSTRAINT pk_coordenador PRIMARY KEY (id)
);