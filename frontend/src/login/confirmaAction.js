import axios from 'axios'
import cors from 'cors'
const BASE_URL = 'http://localhost:3030/api'

export function entrar(dadosEntrar) {
    const [id, senha] = dadosEntrar
    const request =  axios.post(`${BASE_URL}/login`,{id, senha})
    return {
        type: 'ENTRAR',
        payload: request
    }
}
export function add (dadosAdd){
    const [nome, telefone, id, senha] = dadosAdd
    const request = axios.post(`${BASE_URL}/cadastro/`,{ id, nome, telefone, senha})
    return{
        type: 'ADD',
        payload: request
    }
}
export function pegar(dadosPegar){
    const [email] = dadosPegar
    const request = axios.post(`${BASE_URL}/userGetInfo/`,{ email })
    return{
        type: 'PEGAR',
        payload: request
    }
}

export function buscar(id){
    const request = axios.post(`${BASE_URL}/receber`, { id })
    console.log(request)
    return{
        type: 'BUSCAR',
        payload: request
    }
}