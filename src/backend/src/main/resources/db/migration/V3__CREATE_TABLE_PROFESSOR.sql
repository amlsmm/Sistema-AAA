CREATE TABLE SISTEMA_AAA.professor (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_departamento INTEGER NOT NULL,
    nome VARCHAR(60),
    salario INTEGER,
    dt_nasc TIMESTAMP,
    
    CONSTRAINT pk_professor PRIMARY KEY (id),
    FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);