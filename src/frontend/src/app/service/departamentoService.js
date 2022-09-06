import ApiService from "../apiservice";

class departamentoService extends ApiService {

    constructor() {
        super('/api/departamento')
    }

    cadastrar(departamento) {
        return this.post("/cadastrar", departamento)
    }

    listar(){
        return this.get("/listar")
    }

    excluir(id) {
        return this.delete(`/excluir/${id}`)
    }
}

export default departamentoService