const professorValidator = {
    nome: {
        required: 'Campo Obrigatório',
    },
    cpf: {
        required: 'Campo Obrigatório',
        max: {
            value: 11, 
            message: 'O máximo é 11'
        }
    },
    matricula: {
        required: 'Campo Obrigatório'
    },
    email: {
        required: 'Campo Obrigatório',
        
    },
    telefone: {
        required: 'Campo Obrigatório',
        max: {
            value: 11, 
            message: 'O máximo é 11'
        }
    }



}

export default professorValidator