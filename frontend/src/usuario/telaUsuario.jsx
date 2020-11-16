import './Usuario.css'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../main/rotas'
import Cookies from 'js-cookie'

class usuario extends Component {   
    constructor(props){
        super(props)
        
        this.state={
            nome:''
        }
    }

    trocarCookie() {
        Cookies.set('confirmaTela', false, { expires: 7 })
        window.location.href="#/login"
    }
    
    render(){
        Cookies.set('setUser', false, { expires: 7 })


        if(this.props.nome !== ''){
            this.state.nome = this.props.nome
        }
        
        // Validação de Cookies
        if(this.props.telefone !== '') {
            Cookies.set('telefoneUsuario', this.props.telefone, { expires: 7})  // nome, conteudo, expiração
        }
        if(this.props.email !== '') {
            Cookies.set('emailUsuario', this.props.email, { expires: 7}) 
        }
        if(this.state.nome !== '') {
            Cookies.set('nomeUsuario', this.state.nome, { expires: 7 })
        }

        // cookie pra telaLogin
        Cookies.set('confirmaTela', true, { expires: 7 })
        
        if(Cookies.get('confirmaTela') =='true' || Cookies.get('initialLogin') == 'false'){
                    return(    
                        <div className="container">
                            <h1 className="titulo">Autenticado(a) com sucesso, {Cookies.get('nomeUsuario')}!</h1>
                                <p>Nome: {this.state.nome}</p>
                                <p>Email: {Cookies.get('emailUsuario')}</p>
                                <p>Telefone: {Cookies.get('telefoneUsuario')}</p>
                            <div>
            
                                <button id="botaoSair" type="button" className="btn btn-danger" onClick={this.trocarCookie}>Voltar</button>
                                
                            </div>
                        </div>        
                    )} else {
                        return (
                            <div>
                                {window.location.href="#/login"}
                            </div>
                        )
                    }
                }
        }

const mapStateToProps = (state) => ({
    nome: state.busca.nome,
    email: state.busca.email,
    telefone: state.busca.telefone,
})

export default connect(mapStateToProps)(usuario)