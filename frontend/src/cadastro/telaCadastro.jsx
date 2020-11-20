import React,{Component} from 'react'
import {connect} from 'react-redux'
import {add} from '../login/confirmaAction'
import './Cadastro.css'
import Cookies from 'js-cookie'


class Cadastro extends Component {

	constructor(props){
		super(props)

		this.state={
			nome:'',
			email:'',
			telefone:'',
			senha:'',
			confirmaSenha: ''

		}
		this.onChange = this.onChange.bind(this)
		this.cadastar = this.cadastar.bind(this)
	}

	onChange (nome, valor){
		if(nome==='nome'){
			this.setState({nome: valor.target.value})
		}
		else if(nome==='email'){
			this.setState({email: valor.target.value})
		}
		else if(nome==='telefone'){
			this.setState({telefone: valor.target.value})
		}
		else if(nome==='senha'){
			this.setState({senha: valor.target.value})
		}
		else if(nome==='confirmaSenha'){
			this.setState({confirmaSenha: valor.target.value})
		}
	}
	cadastar (){
		if(this.state.nome !== '' && this.state.email !== '' && this.state.telefone !== '' && this.state.senha !== ''){
			if(this.state.senha===this.state.confirmaSenha){
				this.props.enviar([
					this.state.nome,
					this.state.telefone,
					this.state.email,
					this.state.senha
				])
				
				.then(()=>{
					if(this.props.mensagem==='Usuario Cadastrado com sucesso'){
						console.log(this.props.mensagem)
						alert(this.props.mensagem) 
						window.location.href='#/login'
					}
					else{
						alert(this.props.mensagem)
					}
				})		
				.catch( err =>{
					console.error('Erro', err);
				});
		
			}else if(this.state.senha !=''){
				alert("As senhas não são iguais!")
			}
		}
	}

	render(){

		if(Cookies.get('cookieRecebida')){
			return (
				<div>
					{window.location.href="#/usuario"}
				</div>
			)
		} else {
		return(
			<form>
				<div className='CadastroPosicao'>
					<h2 className='CadastroH2'>Cadastro</h2>
					<div>
						<label  className='label'>Nome </label>
						<br/>
						<input type="name" className='CadastroInput' placeholder='Insira o seu nome'required="required" value={this.state.nome} onChange={(e) => this.onChange('nome',e)}/>
					</div>
					<div>
						<label  className='label'>E-mail </label>
						<br/>
						<input type="email" className='CadastroInput' placeholder='Insira o seu email' required="required" value={this.state.email} onChange={(e) => this.onChange('email', e)} />
					</div>
					<div>
						<label className='label'>Telefone</label>
						<br/>
						<input type="text" className='CadastroInput' placeholder='Insira seu telefone' pattern="\(\d{2}\)\d{9}" value={this.state.telefone} onChange={(e) => this.onChange('telefone', e)} />
					</div>
					<div>
						<label className='label'>Senha</label>
						<br/>
						<input type="password" className='CadastroInput'required="required" placeholder='Insira sua senha' value={this.state.senha}onChange={(e)=> this.onChange('senha',e)} />
					</div>
					<div>
						<label className='label'>Confirmar</label>
						<br/>
						<input type="password" className='CadastroInput'required="required" placeholder='Insira sua senha novamente' value={this.state.confirmaSenha} onChange={(e)=> this.onChange('confirmaSenha', e)}/>
					</div>
					<div className='CadastroBT1'>
						<button type="submit" id="botao1" className="btn btn-success" onClick={this.cadastar} >Cadastrar-se</button>
					</div>
					<div className='CadastroBT2'>
					<a href='#/login'>
						<button type="button" id="botao2" className="btn btn-danger">Voltar</button>
					</a>
				</div>
				</div>
			</form>
		)
	}}
} 

const mapStateToProps = (state) => ({mensagem: state.busca.mensagem})

const mapDispatchToProps = (dispatch) =>( {
	enviar: (dados) => dispatch(add(dados))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)