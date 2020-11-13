import './Usuario.css'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../main/rotas'

class usuario extends Component {   
    constructor(props){
        super(props)
        
        this.state={
            nome:'',
            currentTime: 0
        }
    }
    /*
    tick(){
        this.setState((prevState, props) => ({
            currentTime: prevState.currentTime + 1
        }))
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
            )        
    }
*/
    
    
    render(){
       /* 
        if(this.state.currentTime === 6){
            window.location.href='#/sair'
        }*/

        if(this.props.nome !== ''){
            this.state.nome = this.props.nome
        }
        
        console.log(this.props)
        return(
            
            <div className="container">
                <h1 className="titulo">Autenticado(a) com sucesso, {this.state.nome}!</h1>
                    <p>Nome: {this.state.nome}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Telefone: {this.props.telefone}</p>
                <div>
                    <a href='#/sair'>

                    <button id="botaoSair" type="button" className="btn btn-danger">Voltar</button>
                    </a>
                </div>
            </div>        
        )}}

const mapStateToProps = (state) => ({
    nome: state.busca.nome,
    email: state.busca.email,
    telefone: state.busca.telefone
})

export default connect(mapStateToProps)(usuario)