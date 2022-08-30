CREATE TABLE SISTEMA_AAA.curso (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_departamento INTEGER NOT NULL,
    nome VARCHAR(60),
    periodos INTEGER,
    
    CONSTRAINT pk_curso PRIMARY KEY (id),
    FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);