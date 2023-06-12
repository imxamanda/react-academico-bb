const semestreValidator = {
    numero: {
        required: 'Campo Obrigatório',
    },
    dt_inicio: {
        required: 'Campo Obrigatório',
        min: {
            value: 8, 
            message: 'O máximo é 8'
        }
    },
    dt_inicio: {
        required: 'Campo Obrigatório',
        min: {
            value: 8, 
            message: 'O máximo é 8'
        }
    }


}

export default semestreValidator