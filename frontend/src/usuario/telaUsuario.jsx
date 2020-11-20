import './Usuario.css'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../main/rotas'
import Cookies from 'js-cookie'
import base64 from 'base-64'
import { buscar } from '../login/confirmaAction'


class Usuario extends Component {   
    constructor(props){
        super(props)
        
        this.state={
            nome:'',
            currentTime: 0 
        }
        this.chamar = this.chamar.bind(this)
    }

    trocarCookie() {
          Cookies.set('confirmaTela', false, { expires: 7 })
          Cookies.remove('cookieRecebida')
          window.location.href="#/login"
    }

    chamar() {
        this.props.solicitar(Cookies.get('emailteste'))
        console.log(Cookies.get('emailteste'))
    }    
    
    
    render(){
        Cookies.set('setUser', false, { expires: 7 })   
        
        
        
        // Decodar a cookie e separar seus valores em constantes
        const cuki = base64.decode(`${Cookies.get('cookieRecebida')}`)
        const splittedCookie = cuki.split(':')
        Cookies.set('emailteste', splittedCookie[1]) 

            // Função de Tempo
            setInterval(function () {
                window.location.href='#/login'
                {Cookies.remove('cookieRecebida')}
            }, 10000)
            
            if(Cookies.get('cookieRecebida')){
                this.chamar()
                return(
                            <div className="container">
                                <h1 className="titulo">Autenticado(a) com sucesso, {this.props.nome}!</h1>
                                    <p>Nome: {this.props.nome}</p>
                                    <p>Email: {this.props.email}  </p>
                                    <p>Telefone: {this.props.telefone}</p>
                                    <p>{Cookies.get('datarUsuario')}</p>
                                <div>
                
                                    <button id="botaoSair" type="button" className="btn btn-danger" onClick={this.trocarCookie}>Voltar</button>
                                    
                                </div>
                            </div>        
                        )} else {
                                return (
                                    <div>
                                        {Cookies.remove('cookieRecebida')}
                                        {window.location.href="#/login"}
                                    </div>
                                )
                            }}
                        }

const mapStateToProps = (state) => ({
    nome: state.busca.nome,
    email: state.busca.email,
    telefone: state.busca.telefone,
    cookie: state.busca.cookie
})

const mapDispatchToProps = (dispatch) => ({
    solicitar: ((email) => dispatch(buscar(email)))
})


export default connect(mapStateToProps, mapDispatchToProps)(Usuario)