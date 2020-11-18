import './Login.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {entrar} from './confirmaAction'
import Cookies from 'js-cookie'

class Login extends Component {
	constructor(props){
		super(props)

		this.state={
			email: '',
			senha: ''
		}
		this.onChange = this.onChange.bind(this)		
		this.entrar = this.entrar.bind(this)
	}
	onChange (nome, valor )  {

		if(nome==="email"){
		this.setState({email: valor.target.value})
		}
		if(nome==='senha'){
			this.setState({senha: valor.target.value})
		}
	}

 	 entrar (){
		
		Cookies.set('initialLogin', false, { expires: 7 })
		Cookies.set('setUser', true, { expires: 7 })
		

		this.props.enviar([
			this.state.email,
			this.state.senha
		])

		.then(()=>{
			if(this.props.mensagem==='Autenticado com sucesso.'){ 
				//console.log(this.props.cookie)
				Cookies.set('cookieRecebida', this.props.cookie, { expires: 7 })
				window.location.href='#/usuario'
			}
			else{
				alert(this.props.mensagem)
			}
		})
		.catch(err => {
			console.error('fetch failed', err);
		  });
	}
		
	criarCookie() {
		Cookies.set('initialLogin', true, { expires: 7 })
		Cookies.set('newieCookie', this.state.cookie)
	}

	render(){	
		this.criarCookie()
		
		if(Cookies.get('cookieRecebida')){
			return (
				<div>
					{window.location.href="#/usuario"}
				</div>
			)
		} else {

		
		if( Cookies.get('confirmaTela') == 'false' || Cookies.get('initialLogin') == 'true') {
			return(
		<form id="geral">
			<div className='loginPosicao'>
				<h2 className='loginH2'>Autenticação</h2>
				 
				<div>
					<label className='label' >E-mail </label>
					<br/>
					<input type="email" className='loginInput'  value={this.state.email} onChange={(e)=> this.onChange('email',e)} placeholder='Insira o seu email' required="required" />
				</div>
				<div>
					<label className='label'>Senha </label>
					<br/>
					<input type="password" className='loginInput' value={this.state.senha} onChange={(e)=> this.onChange('senha',e)} required="required" placeholder="Insira sua senha"/>
				</div>
		
				<div className='loginBT1'>
					<button type="submit" className="btn btn-warning" id="botao21" onClick={this.entrar}>Entrar</button>
				</div>	
				<div className='loginBT2'>
					<a href='#/cadastro'>
						<button type="button" id="botao2" className="btn btn-danger">Cadastrar</button>
					</a>
				</div>			
			</div>
		</form>
			
		)} else {
			return (
				<div>
					{window.location.href='#/usuario'}
				</div>
			)
		}
	}}
}

const mapStateToProps = (state) =>({mensagem: state.busca.mensagem, cookie: state.busca.cookie })

const mapDispatchToProps = (dispatch) => ({
	enviar: (dados) => dispatch(entrar(dados))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)