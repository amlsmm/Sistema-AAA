CREATE TABLE SISTEMA_AAA.departamento (
    id INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(60),
    sigla VARCHAR(5),
    dt_criacao TIMESTAMP,
    
    CONSTRAINT pk_departamento PRIMARY KEY (id)
);