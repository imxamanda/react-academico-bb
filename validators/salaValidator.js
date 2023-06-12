const salaValidator = {
    numero: {
        required: 'Campo Obrigatório',
        min: {
            value: 3,
            message: 'O mínimo é 3'
        },
        max: {
            value: 4, 
            message: 'O máximo é 4'
        }
    },
    capacidade: {
        required: 'Campo Obrigatório',
    },
    tipo: {
        required: 'Campo Obrigatório',
    }


}

export default salaValidator