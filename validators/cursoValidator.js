const cursoValidator = {
    nome: {
        required: 'Campo Obrigatório',
    },
    duracao: {
        required: 'Campo Obrigatório',
        min: {
            value: 1,
            message: 'O mínimo é 1'
        },
        max: {
            value: 10, 
            message: 'O máximo é 10'
        }
    },
    modalidade: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLength: {
            value: 10, 
            message: 'O máximo é 10'
        }
    }


}

export default cursoValidator