const disciplinaValidator = {
    nome: {
        required: 'Campo Obrigatório',
    },
    curso: {
        required: 'Campo Obrigatório',
        min: {
            value: 1,
            message: 'O mínimo é 1'
        },
        max: {
            value: 10, 
            message: 'O máximo é 10'
        }
    }


}

export default disciplinaValidator