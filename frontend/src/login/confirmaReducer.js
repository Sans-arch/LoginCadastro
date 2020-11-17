const INITIAL_STATE = { mensagem:'', nome: '', email: '', telefone: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ENTRAR':
            return{...state, mensagem: action.payload.data.mensagem,
                             nome: action.payload.data.nome,
                             email: action.payload.data.email,
                             telefone: action.payload.data.telefone,
                             cookie: action.payload.data.cookie}
        case 'ADD':
            return {...state, mensagem: action.payload.data.mensagem}
        case 'PEGAR':
            return {...state, email: action.payload.data.email}
            default:
            return state
    }
}