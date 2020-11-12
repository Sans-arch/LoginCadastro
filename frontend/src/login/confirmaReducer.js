const INITIAL_STATE = { mensagem:'', nome: '', email: '', telefone: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ENTRAR':
            return{...state, mensagem: action.payload.data.mensagem,
                             nome: action.payload.data.nome,
                             email: action.payload.data.email,
                             telefone: action.payload.data.telefone}
        case 'ADD':
            return {...state, mensagem: action.payload.data.mensagem}
        default:
            return state
    }
}